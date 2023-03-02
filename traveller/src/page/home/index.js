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
import Settings from "../settings";
import Profile from "../profile";

const cardViewHeight = 150;

export default function Home({ navigation }) {
  return (
    <SafeAreaView
      style={{
        backgroundColor: "green",
      }}
    >
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.container}>
          <View
            style={{ flexDirection: "row", alignItems: "flex-end", flex: 1 }}
          >
            {/* <TouchableOpacity 
            onPress={() => {
              navigation.navigate(Profile);
            }}
            style={{right:140}}
          >
            {/* <Image source={profilePhoto} style={styles.clickableImg}/>
            
          </TouchableOpacity> */}
            <TouchableOpacity
              style={styles.clickableBtn}
              onPress={() => {
                navigation.navigate(Settings);
              }}
            >
              <Text>
                <Ionicons
                  style={{
                    position: "relative",
                    alignItems: "center",
                  }}
                  size={10 * 3}
                  color="lightblue"
                  name="menu"
                />
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.clickableBtn}
              onPress={() => {
                navigation.navigate(Settings);
              }}
            >
              <Text>
                <Ionicons
                  style={{
                    position: "relative",
                    alignItems: "center",
                  }}
                  size={10 * 3}
                  color="lightblue"
                  name="notifications-sharp"
                />
              </Text>
            </TouchableOpacity>
          </View>

          {/* Search Bar 
          <View
            style={{
              position: "relative",
              marginVertical: 10,
              justifyContent: "center",
              marginHorizontal: 20,
            }}
          >
            <TextInput
              style={{
                backgroundColor: "gray",
                color: "lightblue",
                width: 350,
                height: 40,
                borderRadius: 30,
                justifyContent: "center",
                padding: 15,
                fontSize: 16,
                paddingLeft: 45,
                paddingVertical: 5,
              }}
              placeholder="Search"
              placeholderTextColor={"lightblue"}
            />
            <Ionicons
              style={{
                position: "absolute",
                left: 10,
              }}
              size={10 * 2.5}
              color="lightblue"
              name="search"
            />
          </View> */}
           
          
          {/* En dışta bir view olması gerek */}
          <View style={styles.cardViewLarge}>
          <View style={styles.horizontalScroll}>
           
            <Ionicons
              style={{
                position: "absolute",
                left: 10,
              }}
              size={10 * 4}
              color="#F95656"
              name="add-circle"
            />
          </View> 
            {/* İçeride alt alta üç tane horizontal scrollable view olması gerekiyor */}
            <View style={styles.horizontalScroll}>
              <ScrollView horizontal={true}>
                <View style={styles.rectBtnHorizontal}></View>
                <View style={styles.rectBtnHorizontal}></View>
                <View style={styles.rectBtnHorizontal}></View>
                <View style={styles.rectBtnHorizontal}></View>
              </ScrollView>
            </View>
            <View style={styles.horizontalScroll}>
              <ScrollView horizontal={true}>
                <View style={styles.rectBtnHorizontal}></View>
                <View style={styles.rectBtnHorizontal}></View>
                <View style={styles.rectBtnHorizontal}></View>
                <View style={styles.rectBtnHorizontal}></View>
              </ScrollView>
            </View>
            <View style={styles.horizontalScroll}>
              <ScrollView horizontal={true}>
                <View style={styles.rectBtnHorizontal}></View>
                <View style={styles.rectBtnHorizontal}></View>
                <View style={styles.rectBtnHorizontal}></View>
                <View style={styles.rectBtnHorizontal}></View>
              </ScrollView>
            </View>
          </View>

         
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#4B9D3D",
    alignItems: "center",
    flex: 1,
  },
  cardView: {
    height: cardViewHeight,
    width: 350,
    backgroundColor: "#282A3A",
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
    margin: 20,
    padding: 10,
    flexDirection: "row",
    alignItems: "flex-end",
    flex: 1,
  },  
  cardViewLarge: {
    backgroundColor: "white",
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
    margin: 5,
    padding: 10,
    alignItems: "flex-end",
    flex: 1,
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
    height: 30,
    width: 30,
    backgroundColor: "gray",
    borderRadius: 15,
  },
  headerFont: {
    fontSize: 16,
    color: "white",
    fontWeight: "bold",
    margin: 5,
  },
  lightColorFont: {
    fontSize: 20,
    color: "white",
    fontWeight: "bold",
    marginTop: 55,
    marginLeft: -105,
  },
  rectBtnHorizontal: {
    width: 90,
    height: 60,
    margin: 10,
    borderColor: "lightgreen",
    borderWidth: 1,
    borderRadius: 10,
    backgroundColor: "yellow",
  },
  horizontalScroll: {
    height: 120,
    flex: 1.5,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
});
