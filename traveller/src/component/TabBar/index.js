import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import { Text, TouchableOpacity, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Home1 from '../../page/home';
import Maps from '../../page/maps';
import CustomTabBar from '../CustomTabBar';
import Logout from '../../page/logout';
import Profile from '../../page/profile'
import AddContent from '../../page/addContent';
import UpdateProfile from '../../page/profile/updateProfile';
import SearchList from '../../page/searchList';

const Tab = createBottomTabNavigator();

export default function TabNavigatorComponent() {
  return (
    <Tab.Navigator tabBar={(props) => <CustomTabBar {...props} />}>
      <Tab.Screen
        name="Anasayfa"
        options={{
          headerTitle: () => (
            <Text style={{ fontSize: 24, fontWeight: '500', color: 'white' }}>
              Keşfet
            </Text>
          ),
          headerRight: () => (
            <View style={{ flexDirection: 'row' }}>
              <Ionicons
                name="notifications"
                style={{ marginRight: 16 }}
                size={24}
                color="white"
              />
              <Logout/>
            </View>
          ),
          headerStyle: {
            backgroundColor: '#3D7734',
          },
        }}
        component={Home1}
      />
      <Tab.Screen name="Profil" component={Profile} />
      <Tab.Screen name="Yeni Gönderi" component={AddContent} />
      <Tab.Screen name="Profili Güncelle" component={UpdateProfile} />
      <Tab.Screen name="Arama Sonuçları" component={SearchList} />
    </Tab.Navigator>
  );
}
