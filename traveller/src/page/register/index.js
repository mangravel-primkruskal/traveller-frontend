import {
  Dimensions,
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React from "react";
import CustomButton from "../../component/CustomButton";
import CustomInput from "../../component/CustomInput";

import logo from "../../assets/themeShapes/circle.png";
const cardViewHeight = 150;

export default function Register({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <View
        style={{
          position: "relative",
          marginVertical: 10,
          justifyContent: "center",
          alignItems: "center",
          marginHorizontal: 20,
          marginTop: 30,
        }}
      >
        <Image
          source={logo}
          style={{ width: 250, height: 250, resizeMode: "stretch", marginVertical: 10 }}
        />
        <CustomInput
          placeholder="Ad Soyad"
          iconName="user"
          iconType="font-awesome"
        />
        <CustomInput
          placeholder="E-posta"
          iconName="envelope"
          iconType="font-awesome"
        />
        <CustomInput
          placeholder="Kullanıcı Adı"
          iconName="user"
          iconType="font-awesome"
        />
        <CustomInput
          placeholder="Şifre"
          iconName="lock"
          iconType="font-awesome"
          secureTextEntry
        />
        <CustomInput
          placeholder="Şifre Tekrar"
          iconName="lock"
          iconType="font-awesome"
          secureTextEntry
        />
        <CustomButton
          title="Kayıt Ol"
          onPress={() => console.log("Register button pressed")}
        />
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
  },
});
