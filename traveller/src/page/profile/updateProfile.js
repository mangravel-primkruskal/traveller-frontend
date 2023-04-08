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
      <View style={{ flex: 1, flexDirection: "row" }}>
        <View style={styles.cardView}>
          <View style={styles.clickableImg}>
            {/* <Image source={uri} style={styles.clickableImg}></Image> */}
          </View>
        </View>
      </View>

      <View style={styles.cardView2}>
        <CustomInput
          label="Name"
          value={name}
          onChange={setName}
          placeholder="Enter your name"
          style={styles.input}
        />
        <CustomInput
          label="Email"
          value={email}
          onChange={setEmail}
          placeholder="Enter your email"
          keyboardType="email-address"
          style={styles.input}
        />
        <CustomInput
          label="Username"
          value={username}
          onChange={setUsername}
          placeholder="Enter your username"
          style={styles.input}
        />
        <CustomInput
          label="Password"
          value={password}
          onChange={setPassword}
          placeholder="Enter your password"
          secureTextEntry
          style={styles.input}
        />
        <CustomInput
          label="Confirm Password"
          value={confirmPassword}
          onChange={setConfirmPassword}
          placeholder="Confirm your password"
          secureTextEntry
          style={styles.input}
        />
        <CustomButton
          label="Update"
          onPress={handleUpdate}
          style={styles.button}
        />
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
