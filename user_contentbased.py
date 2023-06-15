

from flask import Blueprint, jsonify, request
from pymongo import MongoClient
from sklearn.neighbors import NearestNeighbors
import googlemaps
from flask_cors import CORS

contentbased_blueprint = Blueprint('user_contentbased', __name__)

# cors = CORS(contentbased_blueprint)
gmaps = googlemaps.Client(key='AIzaSyAYPDM0zOmFSaXxNch9eFcU7FSAYqpPjB8')

@contentbased_blueprint.route('/contentrecyeni', methods=['POST'])
def contentrecyeni():
    user_data = request.get_json()
    keyword = user_data.get('keyword')
    radius = user_data.get('radius')
    country = user_data.get('country')
    city = user_data.get('city')
    county = user_data.get('county')
    zip_code = user_data.get('zip_code')
    location = geocode_location(country, city, county, zip_code)
    num_recommendations = 5

    if not keyword or not radius or not location:
        return jsonify({'message': 'Eksik bilgi. Lütfen keyword, radius ve konum bilgilerini doldurun.'})

    recommended_places = recommend_places(location, radius, keyword, num_recommendations)
    recommended_places = sorted(recommended_places, key=lambda x: x["rating"], reverse=True)
    num_places = min(num_recommendations, len(recommended_places))

    response_data = []
    for place in recommended_places[:num_places]:
        data = {
            "Name": place["name"],
            "Address": place["address"],
            "Rating": place["rating"],
            "Opening Hours": "Open Now" if place["opening_hours"] else "Closed",
            "Price Range": place["price_level"],
            "Google Maps URL": "https://www.google.com/maps/place/?q=place_id:" + place["place_id"],
            "Latitude": place["latitude"],
            "Longitude": place["longitude"]
        }
        response_data.append(data)

    return jsonify(response_data)


def get_nearby_places(location, radius, keyword):
    places = gmaps.places_nearby(location=location, radius=radius, keyword=keyword)
    return places["results"]


def extract_features(places):
    features = []
    for place in places:
        feature = {
            "name": place.get("name", ""),
            "category": place.get("types", []),
            "rating": place.get("rating", 0),
            "price_level": place.get("price_level", 0),
            "opening_hours": place.get("opening_hours", {}).get("open_now", False),
            "address": place.get("vicinity", ""),
            "latitude": place.get("geometry", {}).get("location", {}).get("lat"),
            "longitude": place.get("geometry", {}).get("location", {}).get("lng")
        }
        features.append(feature)
    return features


def create_feature_vectors(features):
    feature_vectors = []
    for feature in features:
        feature_vector = [
            feature["rating"],
            feature["price_level"],
            int(feature["opening_hours"])
        ]
        feature_vectors.append(feature_vector)
    return feature_vectors


def recommend_places(location, radius, keyword, num_recommendations):
    places = get_nearby_places(location, radius, keyword)
    features = extract_features(places)
    feature_vectors = create_feature_vectors(features)

    if num_recommendations > len(feature_vectors):
        num_recommendations = len(feature_vectors)

    model = NearestNeighbors(n_neighbors=num_recommendations)
    model.fit(feature_vectors)

    query_feature = feature_vectors[0]
    distances, indices = model.kneighbors([query_feature])

    recommendations = []
    for index in indices[0]:
        place = places[index]
        recommendation = {
            "name": place["name"],
            "address": place.get("vicinity", ""),
            "rating": place.get("rating", 0),
            "opening_hours": place.get("opening_hours", {}).get("open_now", False),
            "price_level": place.get("price_level", 0),
            "place_id": place.get("place_id", ""),
            "latitude": place.get("geometry", {}).get("location", {}).get("lat"),
            "longitude": place.get("geometry", {}).get("location", {}).get("lng")
        }
        recommendations.append(recommendation)

    return recommendations


def geocode_location(country, city, county, zip_code):
    geocode_result = gmaps.geocode(f'{county}, {city}, {zip_code}, {country}')
    if geocode_result:
        location = geocode_result[0]['geometry']['location']
        return f"{location['lat']},{location['lng']}"

    return None
