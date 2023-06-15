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

export default function AddContent({ navigation }) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [address, setAddress] = useState("");


  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            marginTop: 20
          }}
        >
          <View
            style={{
              backgroundColor: "lightgray",
              width: '80%',
              height: 100,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <AntDesign name="user" size={55} color="green" />

            {/* örnek olması için eklendi, user image gerekli  */}
          </View>
          <Text style={{ marginTop: 10 }}>Resim Eklemek İçin Tıklayınız</Text>
        </View>
        <View style={styles.cardView2}>

          <CustomInput
            placeholder="Başlık"
            secureTextEntry={false}
          />
          <CustomInput
            placeholder="İçerik"
            secureTextEntry={false}
            multiline={true}
            numberOfLines={5}
          />
          {/* <CustomInput
            placeholder="Adresiniz"
            secureTextEntry={false}
          /> */}
          <View style={{ justifyContent: "center", alignItems: "center" }}>
            <CustomButton title="Yeni Gönderi Ekle" />
          </View>
        </View>
      </ScrollView>
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
