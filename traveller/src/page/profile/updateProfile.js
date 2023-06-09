import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  KeyboardAvoidingView,
} from "react-native";
import React, { useState,useEffect } from "react";
import CustomInput from "../../component/CustomInput";
import CustomButton from "../../component/CustomButton";
import { AntDesign } from "@expo/vector-icons";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

const cardViewHeight = 150;

export default function UpdateProfile({ navigation }) {
  const [user, setUser] = useState([]);
  const [username, setUsername] = useState("irems");
  const [email, setEmail] = useState("irm@gmac.c");
  const [phone, setphone] = useState("5054043041");
  const [city, setcity] = useState("Ankara");
  const [county, setcounty] = useState("Etimesgut");
  const [full_name, setfull_name] = useState("Rukiye Sarısoy");
  const [password, setPassword] = useState("123456789");
  const [confirmPassword, setConfirmPassword] = useState("123456789");

  useEffect(() => {
    AsyncStorage.getItem("user").then((data) => {
      setUser(JSON.parse(data));
      console.log(user)
      setUsername(user.username)
      setEmail(user.email)
      setPassword(user.password)
      setphone(user.phone)
      setcounty(user.county)
      setcity(user.city)
    });
  }, []);

  const handleUpdate = () => {
    let data = JSON.stringify({
      username: username,
      email: email,
      password: password,
      city: city,
      county: county,
      phone: phone,
    });

    let config = {
      method: "put",
      maxBodyLength: Infinity,
      //url: "https://travellerbackend2.herokuapp.com/user/update",
      url:"http://10.0.2.2:5000/user/update",
      headers: {
        "Content-Type": "application/json",
      },
      data: data,
    };

    axios
      .request(config)
      .then((response) => {
        console.log(config,"config")
        console.log(JSON.stringify(response.data));
      })
      .catch((error) => {
        console.log("error in update profile")
        alert(JSON.stringify(error))
        console.log(JSON.stringify(error));
      });
  };

  return (
    <SafeAreaView style={styles.container}>
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
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
        <Text style={{ marginTop: 10 }}>Fotoğrafı Değiştir</Text>
      </View>
     
        <View style={styles.cardView2}>
          <ScrollView >
            {/* <CustomInput
              label="Name"
              value={user}
              onChangeText={(text) => setName(text)}
              placeholder="İsminizi giriniz"
              style={styles.input}
            /> */}
            <CustomInput
              label="Email"
              value={email}
              onChangeText={(text) => setEmail(text)}
              placeholder="Email adresinizi giriniz"
              keyboardType="email-address"
              style={styles.input}
            />
            <CustomInput
              label="Username"
              value={username}
              onChangeText={(text) => setUsername(text)}
              placeholder="Kullanıcı adı giriniz"
              style={styles.input}
            />
            <CustomInput
              placeholder="Telefon Numarası"
              iconName="phone"
              value={phone}
              iconType="font-awesome"
              onChangeText={(text) => setphone(text)}
            />
            <CustomInput
              placeholder="Şehir"
              value={city}
              onChangeText={(text) => setcity(text)}
            />
            <CustomInput
              placeholder="İlçe"
              value={county}
              onChangeText={(text) => setcounty(text)}
            />
            <CustomInput
              label="Password"
              value={password}
              onChangeText={(text) => setPassword(text)}
              placeholder="Şifrenizi giriniz"
              secureTextEntry
              style={styles.input}
            />
            <CustomInput
              label="Confirm Password"
              value={confirmPassword}
              onChangeText={(text) => setConfirmPassword(text)}
              placeholder="Şifrenizi tekrar giriniz"
              secureTextEntry
              style={styles.input}
            />
            <View style={{ justifyContent: "center", alignItems: "center" }}>
              <CustomButton title="Profili Güncelle" onPress={() => handleUpdate()}/>
            </View>
          </ScrollView>
        </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 10,
    paddingTop: 10,
  },
  cardView: {
    height: cardViewHeight,
    width: "35%",
    backgroundColor: "#bbb",
    borderRadius: 20,
    marginHorizontal: 5,
    justifyContent: "center",
    alignItems: "center",
  },
  clickableImg: {
    width: "80%",
    height: "80%",
    borderRadius: 50,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
  },
  cardView2: {
    width: "100%",
    backgroundColor: "white",
    borderRadius: 20,
    marginTop: 20,
    padding: 20,
    flex:1,
    paddingBottom:100
  },
  input: {
    marginVertical: 10,
  },
  button: {
    marginTop: 20,
  },
});
