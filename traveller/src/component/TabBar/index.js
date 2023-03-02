
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Ionicons from 'react-native-vector-icons/Ionicons';

import Home from '../../page/home/index';
import Maps from '../../page/maps';
import Login from '../../page/login';

const Tab = createBottomTabNavigator();

function Profile() {
  return (
    <View>
        <Text>dsffs</Text>
    </View>
  );
}

export default function TabNavigatorComponent() {
    return (
      // <Tab.Navigator>
      //   <Tab.Screen name="Home" component={Home} />
      //   <Tab.Screen name="Settings" component={SettingsScreen} />
      // </Tab.Navigator>
  
      <Tab.Navigator style={{backgroundColor:"green"}}
      screenOptions={({ route }) => ({
        
          headerShown: false,
          tabBarStyle: {
            height: 50,
            paddingHorizontal: 5,
            paddingTop: 3,
            backgroundColor: '#green',
            position: 'absolute',
            borderTopWidth: 0,
        },
        
        tabBarIcon: ({ focused, color, size }) => {
          
          let iconName;
  
          if (route.name === 'Home') {
            iconName = focused
              ? 'ios-add-circle'
              : 'ios-add-circle-outline';
          } else if (route.name === 'Map') {
            iconName = focused ? 'map-sharp':'map-outline';
          }
  
  
          // You can return any component that you like here!
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: '#22A39F',
        tabBarInactiveTintColor: '#7FE9DE',
      })}
    >
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Map" component={Maps} />
    </Tab.Navigator>
    );
  }
  