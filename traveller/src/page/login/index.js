import {
  Dimensions,
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from "react-native";
import React, { useState } from "react";
import CustomInput from "../../component/CustomInput";
import CustomButton from "../../component/CustomButton";
import logo from "../../assets/themeShapes/circle.png";
import Register from "../register";
import ForgotPassword from "../forgotPassword";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
const cardViewHeight = 150;

export default function Login({ navigation }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    let data = JSON.stringify({
      username,
      password
    });

    let config = {
      method: 'post',
      maxBodyLength: Infinity,
      url: 'https://travellerbackend.herokuapp.com/login',
      headers: {
        'Content-Type': 'application/json'
      },
      data: data
    };

    axios.request(config)
      .then((response) => {
        if (response?.data?.message === "Login basarili") {
          AsyncStorage.setItem("user", data).then(() => {
            navigation.navigate("TabNavigatorComponent")
          })
        }
        else {
          alert(response?.data?.message)
          navigation.navigate("TabNavigatorComponent")
        }
      })
      .catch((error) => {
        console.log(error);
      });



  };


  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.logoContainer}>
        <Image source={logo} style={styles.logo} />
      </View>

      <View style={styles.formContainer}>
        <CustomInput
          placeholder="Kullanıcı Adı"
          value={username}
          onChangeText={(text) => setUsername(text)}
        />
        <CustomInput
          placeholder="Şifre"
          value={password}
          onChangeText={(text) => setPassword(text)}
          secureTextEntry
        />

        <CustomButton title="Giriş" onPress={handleLogin} />

        <TouchableOpacity
          style={styles.forgotPasswordButton}
          onPress={() => navigation.navigate(ForgotPassword)}
        >
          <Text style={styles.forgotPasswordButtonText}>Şifremi Unuttum</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.registerButton}
          onPress={() => navigation.navigate(Register)}
        >
          <Text style={styles.registerButtonText}>Kayıt Ol</Text>
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
  logoContainer: {
    marginVertical: 30,
    alignItems: "center",
  },
  logo: {
    width: 250,
    height: 250,
    resizeMode: "stretch",
  },
  formContainer: {
    marginHorizontal: 20,
    marginTop: 30,
    alignItems: "center",
  },
  forgotPasswordButton: {
    marginTop: 20,
  },
  forgotPasswordButtonText: {
    fontSize: 16,
    color: "#4B9D3D",
    fontWeight: "bold",
  },
  registerButton: {
    marginTop: 10,
  },
  registerButtonText: {
    fontSize: 16,
    color: "#4B9D3D",
    fontWeight: "bold",
  },
});
