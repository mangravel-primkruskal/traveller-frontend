import React from 'react';
import {
  Button,
  PermissionsAndroid,
  StatusBar,
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from 'react-native';

 
let canAccess;
const requestLocationPermissions = async ({ navigation }) => {
  try {
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
      {
        title: 'Location Permission',
        message:
          'Location permisson required for maps ',
        buttonNeutral: 'Ask Me Later',
        buttonNegative: 'Cancel',
        buttonPositive: 'OK',
      },
    );
    if (granted === PermissionsAndroid.RESULTS.GRANTED) {
      console.log('You can use the map');
      navigation.navigate("GoogleMaps");
      canAccess=true;
    } else {
      console.log('Location permission denied');
    }
  } catch (err) {
    console.warn(err);
  }
};

export default function Maps(navigation){
  return(
  <View style={styles.container}>
    <Text style={styles.item}>Try permissions</Text>
    <TouchableOpacity onPress={()=>requestLocationPermissions(navigation)}
     style={{
                backgroundColor: "#22A39F",
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
                <Text style={styles.lightColorFont}>Request Permissions</Text>

              </TouchableOpacity>
  </View>
  
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems:"center",
    paddingTop: StatusBar.currentHeight,
    backgroundColor: '#282A3A',
    padding: 8,
  },
  item: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    color:"#7FE9DE"
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
