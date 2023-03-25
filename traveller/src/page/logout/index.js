import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
export default function Logout() {
  const navigation = useNavigation();

  const handleLogout = () => {
    // logout işlemlerini yapabilirsiniz, örneğin asyncStorage'ten kullanıcı bilgilerini silebilirsiniz
    // ...

    // Son olarak, TabNavigator sayfasına yönlendirin
    navigation.navigate('Login');
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
