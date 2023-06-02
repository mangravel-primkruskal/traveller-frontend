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
  Linking
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { AntDesign } from "@expo/vector-icons";
import CustomInput from "../../component/CustomInput";
import CustomButton from "../../component/CustomButton";
import axios from "axios";


export default function SearchList({ navigation, route }) {


  const { data } = route?.params;


  return (
    <SafeAreaView
      style={{
        flex: 1,
      }}
    >
      <ScrollView>

        {
          data.map(item =>
            <View style={{ flexDirection: 'column', padding: 20, borderBottomWidth: 1 }} >
              <Text style={{ fontWeight: 'bold', fontSize: 21 }} >{item?.Name}</Text>
              <Text style={{ fontSize: 15 }} >{item?.Address}</Text>
              <Text>{item["Opening Hours"] === "Open Now" ? "Şuan Açık" : "Şuan Kapalı"}</Text>
              <Text>Puan: {item.Rating}</Text>
              <TouchableOpacity onPress={() => Linking.openURL(item["Google Maps URL"])} style={{ padding: 10, marginTop: 10, backgroundColor: 'green', justifyContent: 'center', alignItems: 'center' }} >
                <Text style={{ color: 'white', fontWeight: 'bold' }} >Google'da Görüntüle</Text>
              </TouchableOpacity>
            </View>


          )
        }
        <View style={{ marginTop: 75 }} />
      </ScrollView>

    </SafeAreaView>
  );
}


