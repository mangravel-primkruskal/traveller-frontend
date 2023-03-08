import {
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
  const cardViewHeight = 150;
  
  export default function UpdateProfile({ navigation }) {
    return (
      <SafeAreaView style={styles.container}>
        <View style={{ flex: 1, flexDirection: "row" }}>
          <View style={styles.cardView}>
            <View style={styles.clickableImg}>
              {/* <Image source={uri} style={styles.clickableImg}></Image> */}
            </View>
          </View>
        </View>
  
        <View style={styles.cardView2}></View>
        <View style={styles.cardView2}></View>
        <TextInput
            style={{
              backgroundColor: "#F4F4F4",
              color: "#4B9D3D",
              width: 300,
              height: 50,
              borderRadius: 30,
              justifyContent: "center",
              padding: 15,
              fontSize: 16,
              paddingLeft: 45,
              paddingVertical: 5,
              marginVertical:5
            }}
            placeholder="Ad Soyad"
            placeholderTextColor={"#4B9D3D"}
          />
          <TextInput
            style={{
              backgroundColor: "#F4F4F4",
              color: "#4B9D3D",
              width: 300,
              height: 50,
              borderRadius: 30,
              justifyContent: "center",
              padding: 15,
              fontSize: 16,
              paddingLeft: 45,
              paddingVertical: 5,
              marginVertical:5
            }}
            placeholder="E-posta"
            placeholderTextColor={"#4B9D3D"}
          />
          <TextInput
            style={{
              backgroundColor: "#F4F4F4",
              color: "#4B9D3D",
              width: 300,
              height: 50,
              borderRadius: 30,
              justifyContent: "center",
              padding: 15,
              fontSize: 16,
              paddingLeft: 45,
              paddingVertical: 5,
              marginVertical:5
            }}
            placeholder="Kullanıcı Adı"
            placeholderTextColor={"#4B9D3D"}
          />
          <TextInput
            style={{
              backgroundColor: "#F4F4F4",
              color: "#4B9D3D",
              width: 300,
              height: 50,
              borderRadius: 30,
              justifyContent: "center",
              padding: 15,
              fontSize: 16,
              paddingLeft: 45,
              paddingVertical: 5,
              marginTop: 10,
            }}
            placeholder="Şifre"
            placeholderTextColor={"#4B9D3D"}
            secureTextEntry
          />
          <TextInput
            style={{
              backgroundColor: "#F4F4F4",
              color: "#4B9D3D",
              width: 300,
              height: 50,
              borderRadius: 30,
              justifyContent: "center",
              padding: 15,
              fontSize: 16,
              paddingLeft: 45,
              paddingVertical: 5,
              marginTop: 10,
            }}
            placeholder="Şifre Tekrar"
            placeholderTextColor={"#4B9D3D"}
            secureTextEntry
          />
          <TouchableOpacity
            style={{
              backgroundColor: "#4B9D3D",
              color: "gray",
              width: 150,
              height: 40,
              borderRadius: 30,
              justifyContent: "center",
              alignItems: "center",
              padding: 15,
              fontSize: 16,
              paddingVertical: 5,
              marginTop: 10,
            }}
          >
            <Text style={styles.lightColorFont}>Güncelle</Text>
          </TouchableOpacity>
      </SafeAreaView>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      backgroundColor: "black",
      alignItems: "center",
      flex: 1,
    },
    cardView: {
      height: cardViewHeight,
      width: 350,
      backgroundColor: "#282A3A",
      borderRadius: 45,
      justifyContent: "center",
      margin: 30,
      padding: 10,
    },
    cardView2: {
      height: 200,
      width: 350,
      backgroundColor: "#282A3A",
      borderRadius: 15,
      justifyContent: "center",
      margin: 20,
      padding: 10,
    },
    cardImages: {
      height: 100,
      width: 200,
      borderRadius: 15,
      margin: 10,
      padding: 10,
      resizeMode: "stretch",
      marginRight: -130,
      bottom: 10,
    },
    clickableBtn: {
      height: 30,
      width: 30,
      //backgroundColor:"gray",
      borderRadius: 15,
      marginTop: 20,
      marginLeft: 0,
      left: 140,
    },
    clickableImg: {
      height: 90,
      width: 90,
      //backgroundColor:"purple",
      borderRadius: 45,
    },
    headerFont: {
      fontSize: 16,
      color: "white",
      fontWeight: "bold",
      margin: 5,
    },
    lightColorFont: {
      fontSize: 16,
      color: "white",
      fontWeight: "bold",
    },
    font: {
      fontSize: 16,
      color: "lightblue",
      fontWeight: "bold",
    },
  });
  