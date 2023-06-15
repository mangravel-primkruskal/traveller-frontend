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
export default function ConnectedFriendsList({ navigation, route }) {
  const [searchKey, setSearchKey] = useState("");
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState(null);

  useEffect(()=>{

    let config = {
      method: 'get',
      maxBodyLength: Infinity,
      url: 'http://10.0.2.2:5000/user_friend/',
      headers: { }
    };
    
    axios.request(config)
    .then((response) => {
        setData(response?.data.user_friends)
        setFilteredData(response?.data.user_friends)
    })
    .catch((error) => {
      console.log(error);
    });
    
  },[])


  useEffect(() => {
    if (searchKey.length > 0&&searchKey!= undefined) {
      setFilteredData(
        data.filter((item) => item?.friend_username?.indexOf(searchKey) != -1)
      );
    } else setFilteredData(data);
  }, [searchKey]);

  const onUnFollow = (object_id) => {
    console.log("baglanti kurulacak kisi: ", object_id);
    try {
      if (object_id) {
        let config = {
          method: "post",
          maxBodyLength: Infinity,
          //url: "https://travellerbackend2.herokuapp.com/list/users/" + username,
          url:"http://10.0.2.2:5000/send_friend_request/" + object_id,
          headers: {},
        };
        axios
          .request(config)
          .then((response) => {
            console.log("response", response);
            alert(response?.data?.message);
            console.log(JSON.stringify(response));
            console.log(JSON.stringify(response.data));
            setData(response.data);
          })
          .catch((error) => {
            console.log(error);
          });
      }
    } catch (error) {
        console.log("here catchte",error)
    }
  };

  

  return (
    <SafeAreaView
      style={{
        flex: 1,
      }}
    >
      <View style={{ flexDirection: "row", marginTop: 20 }}>
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
            padding: 10,
            borderColor:"green",
            borderWidth:2,
            borderRadius:50
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
            borderRadius:40
          }}
        >
          <Text>Ara</Text>
        </TouchableOpacity>
      </View>
      <ScrollView>
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
                  {item?.friend_username}
                </Text>
              </View>
              <View style={{ flex: 2, justifyContent: "center" }}>
                {/* <Text>Puan: {item?.namesurname}</Text> */}
                <TouchableOpacity
                  onPress={() => onUnFollow(item.friend_id)}
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
                    Arkadaşlarımdan Çıkar
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
