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
  Linking,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { AntDesign } from "@expo/vector-icons";
import CustomInput from "../../component/CustomInput";
import CustomButton from "../../component/CustomButton";
import axios from "axios";

export default function SearchList({ navigation, route }) {
  const {
    data = [
      {
        Name: "Melek Restorant",
        Address: "Etimesgut 1682. cadde",
        Rating: "3.2",
      },
      {
        Name: "Adana Restorant",
        Address: "Çankaya 45. cadde",
        Rating: "5.2",
      },
    ],
  } = route?.params;

  // useEffect(() => {
  //  data=props.data;
  // }, []);

  return (
    <SafeAreaView
      style={{
        flex: 1,
      }}
    >
      <TouchableOpacity
                  onPress={() => onFollow()}
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
                      fontSize: 22,
                      fontWeight: "700",
                      color: "#4B9D3D",
                    }}
                  >
                    {route?.params?.radius} uzalıktaki {route?.params?.category} Mekanları
                  </Text>
                </TouchableOpacity>
      <ScrollView>
        {data.map((item) => (
          <View
            style={{
              flexDirection: "column",
              padding: 20,
              borderColor:"green",
              borderWidth:1,
              borderRadius:20,
              margin:5,
              
            }}
          >
            <Text style={{ fontWeight: "bold", fontSize: 21 }}>
              {item?.Name}
            </Text>
            <Text style={{ fontSize: 15 }}>{item?.Address}</Text>
            <Text>Ücret Durumu: {item["Price Range"]}</Text>
            <Text>Puan: {item.Rating}</Text>
            <Text>{item["Opening Hours"]}</Text>
            

            <TouchableOpacity
              onPress={() => Linking.openURL("https://www.google.com/maps/place/?q="+item.Address+item.Name)}
              style={{
                padding: 10,
                marginTop: 10,
                backgroundColor: "green",
                justifyContent: "center",
                alignItems: "center",
                borderRadius:30,
              }}
            >
              <Text style={{ color: "white", fontWeight: "bold" }}>
                Google'da Görüntüle
              </Text>
            </TouchableOpacity>
          </View>
        ))}
        <View style={{ marginTop: 75 }} />
      </ScrollView>
    </SafeAreaView>
  );
}
