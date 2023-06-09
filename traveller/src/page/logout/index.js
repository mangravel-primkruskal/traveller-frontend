import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import axios from "axios";

export default function Logout() {
  const navigation = useNavigation();
  const handleLogout = () => {
    let data = '';
    let config = {
      method: 'get',
      maxBodyLength: Infinity,
     url: 'http://10.0.2.2:5000/logout',
     //url:'http://travellerbackend2.herokuapp.com/logout',
      headers: { },
      data : data
    };
    
    axios.request(config)
    .then((response) => {
      console.log(JSON.stringify(response.data));
      alert(JSON.stringify(response.data), "Giriş Sayfasına Yönlendirileceksiniz")
    })
    .catch((error) => {
      console.log(error);
    });
    
    navigation.navigate('Giriş');
  };

  return (
    <View>
      <TouchableOpacity onPress={handleLogout}>
        <Ionicons name="log-out"
              style={{ marginRight: 16 }}
              size={24}
              color="white"></Ionicons>
       </TouchableOpacity>
    </View>
  );
}
