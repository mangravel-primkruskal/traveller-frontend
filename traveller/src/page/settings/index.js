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
  import Ionicons from "react-native-vector-icons/Ionicons";
  
  const cardViewHeight = 150;
  export default function Settings({ navigation }) {
    return (
      <SafeAreaView  style={styles.container}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.container}>
            <View
              style={{
                flex: 1,
                margin: 100,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <TouchableOpacity
                style={{
                  padding: 10,
                  backgroundColor: "#282A3A",
                  width: "90%",
                  height: 50,
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: 20,
                }}
              >
                <Text style={styles.btnText}>SETTINGS</Text>
              </TouchableOpacity>
            </View>
            <View
              style={{
                flex: 1,
                margin: 20,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <TouchableOpacity
                style={{
                  padding: 10,
                  backgroundColor: "#282A3A",
                  width: "90%",
                  height: 50,
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: 20,
                }}
              >
                <Text style={styles.btnText}>Details</Text>
              </TouchableOpacity>
            </View>
            <View
              style={{
                flex: 1,
                margin: 20,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <TouchableOpacity
                style={{
                  padding: 10,
                  backgroundColor: "#282A3A",
                  width: "90%",
                  height: 50,
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: 20,
                }}
              >
                <Text style={styles.btnText}>Privacy & Security</Text>
              </TouchableOpacity>
            </View>
            <View
              style={{
                flex: 1,
                margin: 20,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <TouchableOpacity
                style={{
                  padding: 10,
                  backgroundColor: "#282A3A",
                  width: "90%",
                  height: 50,
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: 20,
                }}
              >
                <Text style={styles.btnText}>Details</Text>
              </TouchableOpacity>
            </View>
            <View
              style={{
                flex: 1,
                margin: 20,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <TouchableOpacity
                style={{
                  padding: 10,
                  backgroundColor: "#282A3A",
                  width: "90%",
                  height: 50,
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: 20,
                }}
              >
                <Text style={styles.btnText}>Log Out</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "black",
    },
    cardView: {
      height: 100,
      width: 350,
      backgroundColor: "#282A3A",
      borderRadius: 15,
      justifyContent: "center",
      alignItems: "center",
      margin: 20,
      padding: 10,
    },
    clickableBtn: {
      height: 30,
      width: 30,
      //  backgroundColor:"gray",
      borderRadius: 15,
      marginTop: 20,
      marginLeft: 340,
    },
    lightColorFont: {
      fontSize: 20,
      color: "white",
      fontWeight: "bold",
      marginTop: 55,
      marginLeft: -105,
    },
    btnText: {
      fontSize: 20,
      color: "#22A39F",
    },
  });
  