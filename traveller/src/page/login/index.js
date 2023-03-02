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
  
  const cardViewHeight = 150;
  
  export default function Login({ navigation }) {
    return (
      <SafeAreaView  style={styles.container}>
      
            <View
              style={{
                position: "relative",
                marginVertical: 10,
                justifyContent: "center",
                marginHorizontal: 20,
                marginTop:300
              }}
            >
              <TextInput
                style={{
                  backgroundColor: "gray",
                  color: "#7FE9DE",
                  width: 300,
                  height: 40,
                  borderRadius: 30,
                  justifyContent: "center",
                  padding: 15,
                  fontSize: 16,
                  paddingLeft: 45,
                  paddingVertical: 5,
                }}
                placeholder="Username"
                placeholderTextColor={"#7FE9DE"}
              />
              <TextInput
              style={{
                backgroundColor: "gray",
                color: "#7FE9DE",
                width: 300,
                height: 40,
                borderRadius: 30,
                justifyContent: "center",
                padding: 15,
                fontSize: 16,
                paddingLeft: 45,
                paddingVertical: 5,
                marginTop:10
              }}
              placeholder="Password"
              placeholderTextColor={"#7FE9DE"}
              secureTextEntry
            />
              <TouchableOpacity   style={{
                backgroundColor: "#22A39F",
                color: "gray",
                width: 300,
                height: 40,
                borderRadius: 30,
                justifyContent: "center",
                alignItems:"center",
                padding: 15,
                fontSize: 16,
                paddingVertical: 5,
                marginTop:10
              }}>
                <Text style={styles.lightColorFont}>Login</Text>

              </TouchableOpacity>
              <TouchableOpacity style={{
                color: "gray",
                width: 300,
                height: 40,
                borderRadius: 30,
                justifyContent: "center",
                alignItems:"center",
                padding: 15,
                fontSize: 16,
                paddingVertical: 5,
                marginTop:10
              }}><Text style={styles.font}>Forgot Password</Text></TouchableOpacity>
            {/* search kısmı bitti şimdi araçlar olmalı ! */}
  </View>
      </SafeAreaView>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      backgroundColor: "#fff",
      alignItems: "center",
      flex:1
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
      left:140
    },
    clickableImg: {
      height: 30,
      width: 30,
      backgroundColor:"gray",
      borderRadius: 15,
      marginTop: 20,
      marginLeft: 0,
      left:140
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
        color: "#7FE9DE",
        fontWeight: "bold",
        
      },
  });
  