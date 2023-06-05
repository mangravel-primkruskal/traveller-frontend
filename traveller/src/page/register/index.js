import {
  Dimensions,
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React, { useState } from "react";
import CustomButton from "../../component/CustomButton";
import CustomInput from "../../component/CustomInput";
import axios from "axios";
import logo from "../../assets/themeShapes/circle.png";
import AsyncStorage from "@react-native-async-storage/async-storage";

const cardViewHeight = 150;

export default function Register({ navigation }) {
  const [username, setUsername] = useState("");
  const [email, setemail] = useState("");
  const [full_name, setfull_name] = useState("");
  const [password, setpassword] = useState("");

  const clickToRegister = () => {
    let data = JSON.stringify({
      full_name: full_name,
      username: username,
      email: email,
      password: password,
      confirm_password: password,
    });
    console.log(data)
    let config = {
      method: "post",
      maxBodyLength: Infinity,
      url: "http://127.0.0.1:5000/register",
      headers: {
        "Content-Type": "application/json",
      },
      data: data,
    };

    axios
      .request(config)
      .then((response) => {
        return  navigation.navigate("TabNavigatorComponent")
        if (response?.data?.message === "Kullanıcı başarıyla kaydedildi") {
          AsyncStorage.setItem("user", data).then(() => {
            navigation.navigate("TabNavigatorComponent")
          })
        }
        else {
          alert(response?.data?.message)
        }

      })
      .catch((error) => {
        navigation.navigate("TabNavigatorComponent")
      });
  };

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
          style={{
            width: 250,
            height: 250,
            resizeMode: "stretch",
            marginVertical: 10,
          }}
        />
        <CustomInput
          placeholder="Ad Soyad"
          iconName="user"
          value={full_name}
          iconType="font-awesome"
          onChangeText={(text) => setfull_name(text)}
        />
        <CustomInput
          placeholder="E-posta"
          iconName="envelope"
          value={email}
          iconType="font-awesome"
          onChangeText={(text) => setemail(text)}
        />
        <CustomInput
          placeholder="Kullanıcı Adı"
          iconName="user"
          value={username}
          iconType="font-awesome"
          onChangeText={(text) => setUsername(text)}
        />
        <CustomInput
          placeholder="Şifre"
          iconName="lock"
          iconType="font-awesome"
          value={password}
          onChangeText={(text) => setpassword(text)}
          secureTextEntry={true}
        />
        <CustomButton title="Kayıt Ol" onPress={() => clickToRegister()} />
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
