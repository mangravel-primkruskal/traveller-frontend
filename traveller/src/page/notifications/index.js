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
import defaultProfilePhoto from "../../../assets/def_profile_photo.webp";
export default function Notifications({ navigation, route }) {
  const [searchKey, setSearchKey] = useState("");
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState(null);

  useEffect(() => {
    let config = {
      method: "get",
      maxBodyLength: Infinity,
      //url: "https://travellerbackend2.herokuapp.com/get_friend_request",
      url:"http://10.0.2.2:5000/get_friend_request",
      headers: {},
    };
    axios
      .request(config)
      .then((response) => {
        if (response?.data) {
          console.log("response data", response?.data?.friend_requests);
          setFilteredData(response?.data?.friend_requests);
          setData(response?.data?.friend_requests);
        }
        // console.log(JSON.stringify(response.data));
      })
      .catch((error) => {
        console.log("aa")
        console.log(error);
      });
  }, []);

  const onAccept=((receiver_id)=>{
   
    let config = {
        method: "post",
        maxBodyLength: Infinity,
        //url: "https://travellerbackend2.herokuapp.com/get_friend_request",
        url:"http://10.0.2.2:5000/accept_friend_request/"+receiver_id,
        headers: {},
      };
      axios
        .request(config)
        .then((response) => {
            console.log(response)
          if (response?.data) {
            console.log("response data", response?.data?.message);
            alert(response?.data?.message)
          }
          // console.log(JSON.stringify(response.data));
        })
        .catch((error) => {
          console.log("kabul ederken hata")
          console.log(error);
        });
    
  })

  return (
    <SafeAreaView
      style={{
        flex: 1,
      }}
    >
      {/* <View style={{ flexDirection: "row", marginTop: 20 }}>
        <TextInput
          placeholder="Aranacak kelime"
          value={searchKey}
          onChangeText={(text) => setSearchKey(text)}
          style={{
            padding: 7,
            backgroundColor: "white",
            borderWidth: 1,
            flex: 1,
            marginLeft: 20,
          }}
        />
        <TouchableOpacity
          style={{
            padding: 7,
            paddingHorizontal: 20,
            backgroundColor: "white",
            justifyContent: "center",
            alignItems: "center",
            marginHorizontal: 10,
          }}
        >
          <Text>Ara</Text>
        </TouchableOpacity>
      </View> */}
      <ScrollView>
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
                    Arkadaşlık İstekleri
                  </Text>
                </View>
        {filteredData &&
          filteredData.map((item) => (
            <View
              style={{
                flexDirection: "row",
                padding: 15,
                borderBottomWidth: 1,
              }}
            >
             
              <View style={{ flex: 1 }}>
                <Image
                  source={
                    item?.profilePhoto ? item.profilePhoto : defaultProfilePhoto
                  }
                  style={{ width: 50, height: 50, borderRadius: 25 }}
                />
              </View>
              <View
                style={{
                  flex: 1,
                  justifyContent: "center",
                }}
              >
                <Text
                  style={{
                    fontWeight: "bold",
                    fontSize: 16,
                  }}
                >
                  {item?.sender_username[0]} 
                </Text>
                <Text>size bir arkadaşlık isteği gönderdi</Text>
              </View>
              <View style={{ flex: 1, justifyContent: "center" }}>
                {/* <Text>Puan: {item?.namesurname}</Text> */}
                <TouchableOpacity
                  onPress={() => onAccept(item?.receiver_id)}
                  style={{
                    padding: 10,
                    marginTop: 10,
                    backgroundColor: "green",
                    justifyContent: "center",
                    alignItems: "center",
                    alignSelf: "flex-end",
                    borderRadius: 10,
                  }}
                >
                  <Text style={{ color: "white", fontWeight: "bold" }}>
                    Kabul Et
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          ))}
        <View style={{ marginTop: 75 }} />
      </ScrollView>
    </SafeAreaView>
  );
}
