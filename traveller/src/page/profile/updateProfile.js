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
import React, { useState } from "react";
import CustomInput from "../../component/CustomInput";
import CustomButton from "../../component/CustomButton";
import { AntDesign } from "@expo/vector-icons";

const cardViewHeight = 150;

export default function UpdateProfile({ navigation }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleUpdate = () => {
    // handle update logic here
    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Username:", username);
    console.log("Password:", password);
    console.log("Confirm Password:", confirmPassword);
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
        <CustomInput
          label="Name"
          value={name}
          onChangeText={(text) => setName(text)}
          placeholder="İsminizi giriniz"
          style={styles.input}
        />
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
          <CustomButton title="Profili Güncelle" />
        </View>
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
    height: "auto",
    width: "100%",
    backgroundColor: "white",
    borderRadius: 20,
    marginTop: 20,
    padding: 20,
  },
  input: {
    marginVertical: 10,
  },
  button: {
    marginTop: 20,
  },
});
