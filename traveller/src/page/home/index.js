import React from "react";
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
import { AntDesign } from "@expo/vector-icons";

const demoData = [
  { test: "test" },
  { test: "test" },
  { test: "test" },
  { test: "test" },
  { test: "test" },
  { test: "test" },
];

export default function Home({ navigation }) {
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
                    Detayları ve arkadaşlarınızı eklemeyi unutmayın
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
                      navigation.navigate(Login);
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
                  }}
                >
                  <Text
                    style={{
                      fontSize: 18,
                      fontWeight: "700",
                      color: "#4B9D3D",
                    }}
                  >
                    Moduma Göre
                  </Text>
                </View>
                <View style={{ flexDirection: "row" }}>
                  <View
                    style={{
                      height: 60,
                      width: 100,
                      backgroundColor: "#70B962",
                      borderRadius: 20,
                      justifyContent: "center",
                      alignItems: "center",
                      marginRight: 10,
                    }}
                  >
                    <Text style={{ color: "white" }}>ÇALIŞKAN</Text>
                  </View>
                  <View
                    style={{
                      height: 60,
                      width: 100,
                      backgroundColor: "#70B962",
                      borderRadius: 20,
                      justifyContent: "center",
                      alignItems: "center",
                      marginRight: 10,
                    }}
                  >
                    <Text style={{ color: "white" }}>ÇALIŞKAN</Text>
                  </View>
                  <View
                    style={{
                      height: 60,
                      width: 100,
                      backgroundColor: "#70B962",
                      borderRadius: 20,
                      justifyContent: "center",
                      alignItems: "center",
                      marginRight: 10,
                    }}
                  >
                    <Text style={{ color: "white" }}>ÇALIŞKAN</Text>
                  </View>
                </View>
              </View>

              <View>
                <View
                  style={{
                    marginTop: 30,
                    marginBottom: 30,
                    justifyContent: "flex-start",
                    width: "80%",
                  }}
                >
                  <Text
                    style={{
                      fontSize: 18,
                      fontWeight: "700",
                      color: "#4B9D3D",
                    }}
                  >
                    Kalabalıklık Durumu
                  </Text>
                </View>
                <View style={{ flexDirection: "row" }}>
                  <View
                    style={{
                      height: 60,
                      width: 100,
                      backgroundColor: "#F28888",
                      borderRadius: 20,
                      justifyContent: "center",
                      alignItems: "center",
                      marginRight: 10,
                    }}
                  >
                    <Text style={{ color: "white" }}>AZ</Text>
                  </View>
                  <View
                    style={{
                      height: 60,
                      width: 100,
                      backgroundColor: "#DE4343",
                      borderRadius: 20,
                      justifyContent: "center",
                      alignItems: "center",
                      marginRight: 10,
                    }}
                  >
                    <Text style={{ color: "white" }}>ORTA</Text>
                  </View>
                  <TouchableOpacity
                    style={{
                      height: 60,
                      width: 100,
                      backgroundColor: "#E30505",
                      borderRadius: 20,
                      justifyContent: "center",
                      alignItems: "center",
                      marginRight: 10,
                    }}
                  >
                    <Text style={{ color: "white" }}>ÇOK</Text>
                  </TouchableOpacity>
                </View>
              </View>
              <View>
                <View
                  style={{
                    marginTop: 30,
                    marginBottom: 30,
                    justifyContent: "flex-start",
                    width: "80%",
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
                </View>
                <View style={{ flexDirection: "row" }}>
                  <View
                    style={{
                      height: 60,
                      width: 220,
                      borderRadius: 20,
                      marginRight: 10,
                    }}
                  >
                    <Text
                      style={{
                        fontSize: 14,
                        color: "#4B9D3D",
                      }}
                    >
                      Sizi takip eden ... kişi
                    </Text>
                  </View>

                  <TouchableOpacity
                    style={{
                      height: 70,
                      width: 70,
                      backgroundColor: "lightgray",
                      borderRadius: 35,
                      marginRight: 20,
                    }}
                  ></TouchableOpacity>
                </View>
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
});
