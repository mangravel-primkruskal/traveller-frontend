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
} from "react-native";
import React, { useEffect, useState } from "react";
// import colors from "../../constant/colors";
import axios from "axios";
import { AntDesign } from "@expo/vector-icons"; 
import AsyncStorage from "@react-native-async-storage/async-storage";

const cardViewHeight = 150;
const demoData = [
  { test: "test" },
  { test: "test" },
  { test: "test" },
  { test: "test" },
  { test: "test" },
  { test: "test" },
];

export default function Profile({ navigation, route }) {

  const [user, setUser] = useState([{ username: "" }])

  const [friendsCount, setFriendsCount] = useState([])

  useEffect(() => {
    AsyncStorage.getItem("user").then((data) => {
      setUser(JSON.parse(data))
    })
  }, [])


  useEffect(()=>{

    let config = {
      method: 'get',
      maxBodyLength: Infinity,
      url: 'http://10.0.2.2:5000/user_friend/',
      headers: { }
    };
    
    axios.request(config)
    .then((response) => {
      console.log(response?.data?.user_friends.length);
      setFriendsCount(response?.data?.user_friends.length)
    })
    .catch((error) => {
      console.log(error);
    });
    
  },[])

  const openUserFriendsList = () => {
    navigation.navigate("ConnectedFriendsList")
  }
 

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
                    flex: 1,
                    justifyContent: "center",
                    alignItems: "center",
                    margin: 20,
                  }}
                >
                  <View
                    style={{
                      backgroundColor: "lightgray",
                      width: 80,
                      height: 80,
                      borderRadius: 40,
                      alignItems: "center",
                      justifyContent: "center",

                    }}
                  >
                    <AntDesign name="user" size={55} color="green" />
                    {/* örnek olması için eklendi, user image gerekli  */}
                  </View>
                </View>
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
                    {user?.full_name}
                  </Text>

                  <Text style={{ color: "#4B9D3D" }}> {user?.username}</Text>

                  <View style={{ flexDirection: "row", margin: 5 }}>
                    <View style={{ flex: 2 }}>
                      <TouchableOpacity
                       onPress={(event) => {
                        navigation.navigate("Profili Güncelle");
                      }}
                        style={{
                          backgroundColor: "green",
                          width: 150,
                          height: 30,
                          borderRadius: 15,
                          padding: 3,
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        <Text style={{ color: "white" }}>Profili Düzenle</Text>
                        {/* <AntDesign name="setting" size={5} color="white" /> */}
                      </TouchableOpacity>
                    </View>

                    <View style={{ flex: 1 }}>
                      {/* <TouchableOpacity
                        // tıklanınca profil düzenleme açılır
                        onPress={(event) => {
                          navigation.navigate("Profili Güncelle");
                        }}
                        style={{
                          backgroundColor: "gray",
                          width: 30,
                          height: 30,
                          borderRadius: 15,
                          alignItems: "center",
                          justifyContent: 'center'
                        }}
                      >
                        <AntDesign name="setting" size={28} color="white" />
                      </TouchableOpacity> */}
                    </View>
                  </View>
                </View>
              </View>

              {/* Etkileşimler/ bağlantıda olunan kullanıcılar  */}

              <View
                style={{
                  flexDirection: "row",
                  width: "80%",
                  backgroundColor: "#EFEFEF",
                  borderRadius: 19,
                  padding: 10,
                  marginTop: 10
                }}
              >
                <TouchableOpacity
                  onPress={()=>openUserFriendsList()}
                  style={{
                    height: 60,
                    width: 220,
                    borderRadius: 20,
                    marginRight: 10,
                    flex: 1,
                    flexDirection: "column",
                    justifyContent: 'center',
                    alignItems: 'center'
                  }}
                >
                  <Text
                    style={{
                      fontSize: 18,
                      color: "black",
                      fontWeight: "900",
                    }}
                  >
                    {friendsCount}
                  </Text>
                  <Text
                    style={{
                      fontSize: 14,
                      color: "black",
                    }}
                  >
                    Arkadaşlar
                  </Text>
                </TouchableOpacity>

                {/* <View
                  style={{
                    height: 60,
                    width: 220,
                    borderRadius: 20,
                    marginRight: 10,
                    flex: 1,
                    flexDirection: "column",
                    justifyContent: 'center',
                    alignItems: 'center'
                  }}
                >
                  <Text
                    style={{
                      fontSize: 18,
                      color: "black",
                      fontWeight: "900",
                    }}
                  >
                    45
                  </Text>
                  <Text
                    style={{
                      fontSize: 14,
                      color: "black",
                    }}
                  >
                    Takip Edilen
                  </Text>
                </View> */}
                <View
                  style={{
                    height: 60,
                    width: 220,
                    borderRadius: 20,
                    marginRight: 10,
                    flex: 1,
                    flexDirection: "column",
                    justifyContent: 'center',
                    alignItems: 'center'
                  }}
                >
                  <Text
                    style={{
                      fontSize: 18,
                      color: "black",
                      fontWeight: "900",
                    }}
                  >
                    45
                  </Text>
                  <Text
                    style={{
                      fontSize: 14,
                      color: "black",
                    }}
                  >
                    Gönderi
                  </Text>
                </View>
              </View>

              {/* Favoriler */}
              <View
                style={{
                  marginTop: 30,
                  marginBottom: 30,
                  justifyContent: "center",
                  width: "80%",
                }}
              >
                <Text
                  style={{ fontSize: 18, fontWeight: "700", color: "#4B9D3D" }}
                >
                  Favori Mekanlar {"(45)"}
                </Text>
              </View>

              <View
                style={{
                  width: "90%",
                  marginHorizontal: 10,
                  alignItems: "center",
                }}
              >
                <ScrollView showsHorizontalScrollIndicator={false}>
                  {demoData.map((item) => (
                    <TouchableOpacity style={styles.cardInfo2}>
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
    margin: 5,
  },
  cardInfo2: {
    backgroundColor: "blue",
    borderRadius: 19,
    margin: 10,
    alignContent: "center",
    width: 320,
  },
  imageContainer: {
    height: 150,
    width: 200,
    borderRadius: 20,
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
