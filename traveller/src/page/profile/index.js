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

export default function Profile({ navigation, route }) {

  const { crowded , mood } = route.params;
  alert(mood);

  return (
    <SafeAreaView style={styles.container}>
      <View style={{ flex: 1, flexDirection: "row" }}>
        <View style={styles.cardView}>
          <View style={styles.clickableImg}>
            {/* <Image source={uri} style={styles.clickableImg}></Image> */}
          </View>
        </View>
      </View>

      <View style={styles.cardView2}></View>
      <View style={styles.cardView2}></View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "black",
    alignItems: "center",
    flex: 1,
  },
  cardView: {
    height: cardViewHeight,
    width: 350,
    backgroundColor: "#282A3A",
    borderRadius: 45,
    justifyContent: "center",
    margin: 30,
    padding: 10,
  },
  cardView2: {
    height: 200,
    width: 350,
    backgroundColor: "#282A3A",
    borderRadius: 15,
    justifyContent: "center",
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
    height: 90,
    width: 90,
    //backgroundColor:"purple",
    borderRadius: 45,
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
    color: "lightblue",
    fontWeight: "bold",
  },
});
