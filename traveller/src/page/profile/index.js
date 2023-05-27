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
import React from "react";
// import colors from "../../constant/colors";

import { AntDesign } from "@expo/vector-icons";
import UpdateProfile from "./updateProfile";

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
                    Bülent Ersoy
                  </Text>

                  <Text style={{ color: "#4B9D3D" }}>Şarkıcı</Text>

                  <View style={{ flexDirection: "row", margin: 5 }}>
                    <View style={{ flex: 2 }}>
                      <TouchableOpacity
                        style={{
                          backgroundColor: "green",
                          width: 100,
                          height: 30,
                          borderRadius: 15,
                          padding: 3,
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        <Text style={{ color: "white" }}>Takip Et</Text>
                      </TouchableOpacity>
                    </View>

                    <View style={{ flex: 1 }}>
                      <TouchableOpacity
                        // tıklanınca profil düzenleme açılır
                        onPress={(event) => {
                          console.log("testtt", event);
                          navigation.navigate(UpdateProfile);
                        }}
                        style={{
                          backgroundColor: "gray",
                          width: 30,
                          height: 30,
                          borderRadius: 15,
                          alignItems: "center",
                        }}
                      >
                        <AntDesign name="setting" size={28} color="white" />
                      </TouchableOpacity>
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
                  padding: 20,
                  margin: 5,
                }}
              >
                <View
                  style={{
                    height: 60,
                    width: 220,
                    borderRadius: 20,
                    marginRight: 10,
                    flex: 1,
                    flexDirection: "column",
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
                    Takipçi
                  </Text>
                </View>

                <View
                  style={{
                    height: 60,
                    width: 220,
                    borderRadius: 20,
                    marginRight: 10,
                    flex: 1,
                    flexDirection: "column",
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
                </View>
                <View
                  style={{
                    height: 60,
                    width: 220,
                    borderRadius: 20,
                    marginRight: 10,
                    flex: 1,
                    flexDirection: "column",
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
                <View
                  style={{
                    height: 60,
                    width: 220,
                    borderRadius: 20,
                    marginRight: 10,
                    flex: 1,
                    flexDirection: "column",
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
                    Favoriler
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
                  Favori Mekanlar
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
