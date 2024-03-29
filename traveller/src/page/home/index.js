import React, { useEffect, useState } from "react";
import {
  Dimensions,
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Share,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { AntDesign } from "@expo/vector-icons";
import CustomInput from "../../component/CustomInput";
import CustomButton from "../../component/CustomButton";
import axios from "axios";
import * as Location from "expo-location"; //RIS 20.05.2023

const demoData = [
  { test: "test" },
  { test: "test" },
  { test: "test" },
  { test: "test" },
  { test: "test" },
  { test: "test" },
];

const dummyOutdoorTypeData = [
  {
    name: "Kahve",
  },
  {
    name: "Restoran",
  },
  {
    name: "Market",
  },
  {
    name: "Müze",
  },
  {
    name: "Park",
  },
];

const dummyRadiusData = [
  {
    state: "Yakın",
    value: 1000,
  },
  {
    state: "Orta",
    value: 2000,
  },
  {
    state: "Uzak",
    value: 3000,
  },
];

export default function Home({ navigation }) {
  const [selectedOutdoorType, setSelectedOutdoorType] = useState(null);
  const [selectedRadius, setSelectedRadius] = useState(null);
  const [user, setUser] = useState([{ username: "" }]);
  const [country, setCountry] = useState("Turkey");
  const [city, setCity] = useState("Ankara");
  const [county, setCounty] = useState("Eryaman");
  const [zipCode, setZipCode] = useState("06824");
  const [location, setLocation] = useState(null);
  
  useEffect(() => {
    AsyncStorage.getItem("user").then((data) => {
      setUser(JSON.parse(data));
    });
  }, []);

  
   useEffect(()=>{
    const result= async()=>{
      let location =  await Location.getCurrentPositionAsync({});
    if(location){
      setLocation(location);
    }
    }
    result();
   },[location]);

  const onShare = async () => {
    const result = await Share.share({
      message: "Bu uygulamayı mutlaka kullanmalısınız.",
    });
    if (result.action === Share.sharedAction) {
      if (result.activityType) {
        // shared with activity type of result.activityType
      } else {
        // shared
      }
    } else if (result.action === Share.dismissedAction) {
      // dismissed
    }
  };

  const onFollow=async()=>{
    return navigation.navigate("FriendList");
  }

  const searchDataFromLatLong=()=>{
    const permission = async () => {
      try {
        let { status } = await Location.requestForegroundPermissionsAsync();
        if (status !== "granted") {
          console.log("error");
          setErrorMsg("Permission to access location was denied");
          return;
        }
        let location = await Location.getCurrentPositionAsync({accuracy: Location.Accuracy.High});
        if (location) {
          setLocation(location);
          console.log("first location", location);
        }
      } catch (error) {
        console.log("ERROR:::", error);
      }
    };
    permission();


    if(location){
      console.log(location,"locatiooonnn")
      // http://127.0.0.1:5000/contentrec/+lat+"/"+long+"/"
      let data = JSON.stringify({
       keyword: selectedOutdoorType,
       radius: dummyRadiusData.filter((text) => text.state === selectedRadius)[0]
         .value
     });
     console.log("config arama sayfası istek verileri",data)
       console.log("what is url","http://10.0.2.2:5000/contentrec/"+location.coords.latitude+"/"+location.coords.longitude+"/")
     let config = {
       method: "post",
       maxBodyLength: Infinity,
       url: "http://10.0.2.2:5000/contentrec/"+location.coords.latitude+"/"+location.coords.longitude+"/",
       //url: "https://travellerbackend2.herokuapp.com/contentrecyeni",
       headers: {
         "Content-Type": "application/json",
       },
       data: data,
     };
 
     console.log("config"+config)
     axios
       .request(config)
       .then((response) => {
         console.log("arama sonuçları lat long ile ",response.data);
         navigation.navigate("Arama Sonuçları", { data: response.data,category: selectedOutdoorType,radius:selectedRadius});
        
       })
       .catch((error) => {
         alert(error);
       });
 
     }
  }

  const searchData = () => {
    
    let data = JSON.stringify({
      keyword: selectedOutdoorType,
      radius: dummyRadiusData.filter((text) => text.state === selectedRadius)[0]
        .value,
      country: country,
      city: city,
      county: county,
      zip_code: zipCode,
    });
    console.log("config arama sayfası istek verileri",data)

    let config = {
      method: "post",
      maxBodyLength: Infinity,
      url: "http://10.0.2.2:5000/contentrecyeni",
      //url: "https://travellerbackend2.herokuapp.com/contentrecyeni",
      headers: {
        "Content-Type": "application/json",
      },
      data: data,
    };

    axios
      .request(config)
      .then((response) => {
        navigation.navigate("Arama Sonuçları", { data: response.data,category: selectedOutdoorType,radius:selectedRadius });
        console.log(response.data);
      })
      .catch((error) => {
        alert(error);
      });

   
  };

  return (
    <SafeAreaView
      style={{
        flex: 1,
      }}
    >
      <View style={{ flex: 1, backgroundColor: "white" }}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View
            style={{ backgroundColor: "#3D7734", flex: 1, marginBottom: 150 }}
          >
            <View style={styles.container}>
              <View style={styles.cardInfo}>
                <View
                  style={{
                    flex: 3,
                    justifyContent: "center",
                  }}
                >
                  <Text
                    style={{
                      fontWeight: "600",
                      fontSize: 15,
                      color: "#4B9D3D",
                    }}
                  >
                    Gittiğiniz Yeri Ekleyin
                  </Text>
                  <Text style={{ color: "#4B9D3D" }}>
                    Merhaba{" "}
                    <Text style={{ fontWeight: "bold", color: "#F95656" }}>
                      {user?.username}
                    </Text>
                    , Detayları ve arkadaşlarınızı eklemeyi unutmayın
                  </Text>
                </View>
                <View
                  style={{
                    flex: 1,
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <TouchableOpacity
                    onPress={() => {
                      navigation.navigate("Yeni Gönderi");
                    }}
                  >
                    <AntDesign name="pluscircle" size={44} color="#F95656" />
                  </TouchableOpacity>
                </View>
              </View>
              <View
                style={{
                  marginTop: 30,
                  marginBottom: 30,
                  justifyContent: "flex-start",
                  width: "80%",
                }}
              >
                <Text
                  style={{ fontSize: 18, fontWeight: "700", color: "#4B9D3D" }}
                >
                  Tercih Edilen Yerler
                </Text>
              </View>

              <View style={{ height: 160, width: "100%" }}>
                <ScrollView
                  horizontal={true}
                  showsHorizontalScrollIndicator={false}
                >
                  {demoData.map((item) => (
                    <TouchableOpacity style={styles.imageContainer}>
                      <Image
                        source={require("../../../assets/foto.jpeg")}
                        style={styles.image}
                      />
                      <View style={styles.imageText}>
                        <Text
                          style={{
                            color: "white",
                            fontWeight: "bold",
                            fontSize: 17,
                          }}
                        >
                          BOLU
                        </Text>
                        <Text style={{ color: "white", fontWeight: "bold" }}>
                          YEDİGÖLLER
                        </Text>
                      </View>
                    </TouchableOpacity>
                  ))}
                </ScrollView>
              </View>
              <View>
                <View
                  style={{
                    marginTop: 30,
                    marginBottom: 30,
                    justifyContent: "flex-start",
                    width: "80%",
                    paddingHorizontal: 40,
                  }}
                >
                  <Text
                    style={{
                      fontSize: 18,
                      fontWeight: "700",
                      color: "#4B9D3D",
                    }}
                  >
                    Mekan Türü
                  </Text>
                </View>
                <View style={{ flexDirection: "row" }}>
                  <ScrollView
                    horizontal={true}
                    style={{ marginHorizontal: 10 }}
                  >
                    {dummyOutdoorTypeData.map((item) => (
                      <TouchableOpacity
                        style={[
                          styles.selectionCard,
                          {
                            borderWidth:
                              selectedOutdoorType === item.name ? 1 : 0,
                          },
                        ]}
                        onPress={() => setSelectedOutdoorType(item.name)}
                      >
                        <Text style={{ color: "white" }}>{item.name}</Text>
                      </TouchableOpacity>
                    ))}
                  </ScrollView>
                </View>
              </View>

              <View>
                <View
                  style={{
                    marginTop: 30,
                    marginBottom: 30,
                    justifyContent: "flex-start",
                    width: "80%",
                    paddingHorizontal: 20,
                  }}
                >
                  <Text
                    style={{
                      fontSize: 18,
                      fontWeight: "700",
                      color: "#4B9D3D",
                    }}
                  >
                    Uzaklık
                  </Text>
                </View>
                <View style={{ flexDirection: "row" }}>
                  <ScrollView horizontal={true}>
                    {dummyRadiusData.map((item) => (
                      <TouchableOpacity
                        onPress={() => setSelectedRadius(item.state)}
                        style={[
                          styles.selectionCard,
                          {
                            backgroundColor: "red",
                            borderWidth: selectedRadius === item.state ? 1 : 0,
                          },
                        ]}
                      >
                        <Text style={{ color: "white" }}>{item.state}</Text>
                      </TouchableOpacity>
                    ))}
                  </ScrollView>
                </View>
                {selectedOutdoorType !== null && selectedRadius !== null ? (
                  <View style={{ paddingVertical: 20 }}>
                   
                   {/* Konumumu kullan kısmı */}
                   <View>
              {/* <TouchableOpacity
                  onPress={() => searchDataFromLatLong()}
                  style={{
                    marginTop: 30,
                    marginBottom: 30,
                    justifyContent: "flex-start",
                    width: "80%",
                    paddingHorizontal: 20,
                  }}
                >
                  <Text
                    style={{
                      fontSize: 18,
                      fontWeight: "700",
                      color: "#4B9D3D",
                    }}
                  >
                    Konumumu Kullanarak Ara
                  </Text>
                </TouchableOpacity> */}
                 <View style={{ alignItems: "center" }}>
                      <CustomButton title="Konumumu Kullanarak Ara" onPress={() => searchDataFromLatLong()} />
                    </View>
              </View>
              <View
                 
                  style={{
                    alignItems:"center",
                    width: "100%",
                    marginVertical:5
                  }}
                >
                  <Text
                    style={{
                      fontSize: 18,
                      fontWeight: "700",
                      color: "#4B9D3D",
                    }}
                  >
                    veya
                  </Text>
                </View>
                    <CustomInput
                      value={country}
                      onChangeText={(text) => setCountry(text)}
                      placeholder="Ülke Giriniz"
                    />
                    <CustomInput
                      value={city}
                      onChangeText={(text) => setCity(text)}
                      placeholder="Şehir Giriniz"
                    />
                    <CustomInput
                      value={county}
                      onChangeText={(text) => setCounty(text)}
                      placeholder="İlçe Giriniz"
                    />
                    <CustomInput
                      value={zipCode}
                      onChangeText={(text) => setZipCode(text)}
                      placeholder="Posta Kodu Giriniz"
                    />
                    <View style={{ alignItems: "center" }}>
                      <CustomButton title="Ara" onPress={() => searchData()} />
                    </View>
                  </View>
                ) : null}
              </View>
              <View>
              <TouchableOpacity
                  onPress={() => onFollow()}
                  style={{
                    marginTop: 40,
                    marginBottom: 30,
                    justifyContent: "flex-start",
                    width: "80%",
                    padding: 20,
                    borderColor:"green",
                    borderWidth:2,
                    borderRadius:50

                  }}
                >
                  <Text
                    style={{
                      fontSize: 18,
                      fontWeight: "700",
                      color: "#4B9D3D",
                    }}
                  >
                    Arkadaşlarını Bul
                  </Text>
                </TouchableOpacity>
              </View>
              <View>
                <TouchableOpacity
                  onPress={() => onShare()}
                  style={{
                    marginTop: 30,
                    marginBottom: 30,
                    justifyContent: "flex-start",
                    width: "80%",
                    paddingHorizontal: 20,
                  }}
                >
                  <Text
                    style={{
                      fontSize: 18,
                      fontWeight: "700",
                      color: "#4B9D3D",
                    }}
                  >
                    Arkadaşlarınla Paylaş
                  </Text>
                </TouchableOpacity>
                
              </View>
            </View>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderTopLeftRadius: 31,
    borderTopRightRadius: 31,
    backgroundColor: "white",
    marginTop: 20,
    alignItems: "center",
    paddingTop: 30,
  },
  cardInfo: {
    flexDirection: "row",
    width: "80%",
    backgroundColor: "#EFEFEF",
    borderRadius: 19,
    padding: 20,
  },
  imageContainer: {
    height: 150,
    width: 150,
    borderRadius: 20,
    marginLeft: 20,
  },
  image: {
    width: "100%",
    height: "100%",
    borderRadius: 20,
    position: "absolute",
    blurRadius: 100,
  },
  imageText: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
    paddingBottom: 20,
  },
  selectionCard: {
    height: 60,
    width: 100,
    backgroundColor: "#70B962",
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 10,
  },
});
