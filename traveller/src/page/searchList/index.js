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
  const data = [
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
  ];

  useEffect(() => {
   data=props.data;
  }, []);

  return (
    <SafeAreaView
      style={{
        flex: 1,
      }}
    >
      <ScrollView>
        {data.map((item) => (
          <View
            style={{
              flexDirection: "column",
              padding: 20,
              borderBottomWidth: 1,
            }}
          >
            <Text style={{ fontWeight: "bold", fontSize: 21 }}>
              {item?.Name}
            </Text>
            <Text style={{ fontSize: 15 }}>{item?.Address}</Text>
            <Text>Şuan da Açık</Text>
            <Text>Puan: {item.Rating}</Text>
            <TouchableOpacity
              onPress={() => Linking.openURL("https://google.com")}
              style={{
                padding: 10,
                marginTop: 10,
                backgroundColor: "green",
                justifyContent: "center",
                alignItems: "center",
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
