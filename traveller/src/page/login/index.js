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

import logo from "../../assets/themeShapes/circle.png";
import Register from "../register";
import ForgotPassword from "../forgotPassword";
const cardViewHeight = 150;

export default function Login({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
     
      <View
        style={{
          position: "relative",
          marginVertical: 10,
          justifyContent: "center",
          alignItems:"center",
          marginHorizontal: 20,
          marginTop: 30,
        }}
      >
         <Image
        source={logo}
        style={{width:250,height:250,resizeMode: "stretch",marginVertical:10}}
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
          <Text style={styles.lightColorFont}>Giriş</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            height: 40,
            borderRadius: 30,
            alignItems: "center",
            padding: 15,
            fontSize: 16,
            paddingVertical: 5,
            marginTop: 10,
          }}
          onPress={() => {navigation.navigate(ForgotPassword);}}
        >
          <Text style={styles.font}>Şifremi Unuttum</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            height: 30,
            padding: 15,
            fontSize: 16,
            paddingVertical: 5,
          }}
          onPress={() => {navigation.navigate(Register);}}
        >
          <Text style={styles.font}>Kayıt Ol</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    alignItems: "center",
    flex: 1,
  },
  cardView: {
    height: cardViewHeight,
    width: 350,
    backgroundColor: "#4B9D3D",
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
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
    height: 30,
    width: 30,
    backgroundColor: "gray",
    borderRadius: 15,
    marginTop: 20,
    marginLeft: 0,
    left: 140,
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
    color: "#4B9D3D",
    fontWeight: "bold",
  },
});
