import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import Ionicons from 'react-native-vector-icons/Ionicons';

import Home from './src/page/home/index';
import TabNavigatorComponent from './src/component/TabBar';
import Maps from './src/page/maps';
import GoogleMaps from './src/page/maps/googleMaps';
import Settings from './src/page/settings';
import Profile from './src/page/profile';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function SettingsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Settings!</Text>
    </View>
  );
}


export default function App() {
  return (

      <NavigationContainer>
        {/* <Stack.Navigator>
        <Stack.Screen  name="Home" component={Home}/>
      </Stack.Navigator> */}
      <Stack.Navigator>
        <Stack.Screen name="TabNavigator" component={TabNavigatorComponent} 
          options={{ headerShown: false }}></Stack.Screen>
        <Stack.Screen name="Profile" component={Profile} options={{ headerShown: false }} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Maps" component={Maps} />
        <Stack.Screen name="GoogleMaps" component={GoogleMaps} options={{ headerShown: false }}/>
        <Stack.Screen name="Settings" component={Settings}  options={{ headerShown: false }}/>
      </Stack.Navigator>
      </NavigationContainer>
      
     
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
