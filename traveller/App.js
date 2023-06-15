import {
  Text,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";

import { createStackNavigator } from "@react-navigation/stack";

import Home from "./src/component/TabBar";
import Login from "./src/page/login";
import Register from "./src/page/register";
import ForgotPassword from "./src/page/forgotPassword";
import GoogleMaps from "./src/page/maps/googleMaps";
import UpdateProfile from "./src/page/profile/updateProfile";
import FriendList from "./src/page/friendsList";
import Notifications from "./src/page/notifications";
import ConnectedFriendsList from "./src/page/friendsList/connectedFriends";
const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Giriş"
          component={Login}
          initialRouteName='Login'
          options={({ navigation }) => ({ navigation })}
        />
        <Stack.Screen
          name="Register"
          component={Register}
          options={{
            headerTitle: () => (
              <Text style={{ fontSize: 20, fontWeight: "bold" }}>
                Kayıt Ol
              </Text>
            ),
          }} />
        <Stack.Screen
          name="TabNavigatorComponent"
          component={Home}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="ForgotPassword"
          component={ForgotPassword}
          options={{
            headerTitle: () => (
              <Text style={{ fontSize: 20, fontWeight: "bold" }}>
                Şifremi Unuttum
              </Text>
            ),
          }} />
           <Stack.Screen
          name="FriendList"
          component={FriendList}
          options={{
            headerTitle: () => (
              <Text style={{ fontSize: 20, fontWeight: "bold" }}>
                Arkadaşlarını Bul
              </Text>
            ),}}
        />
         <Stack.Screen
          name="ConnectedFriendsList"
          component={ConnectedFriendsList}
          options={{
            headerTitle: () => (
              <Text style={{ fontSize: 20, fontWeight: "bold" }}>
                Arkadaşlarım
              </Text>
            ),}}
        />
        
         <Stack.Screen
          name="Notifications"
          component={Notifications}
          options={{
            headerTitle: () => (
              <Text style={{ fontSize: 20, fontWeight: "bold" }}>
                Bildirimler
              </Text>
            ),}}
        />
        <Stack.Screen
          name="GoogleMaps"
          component={GoogleMaps}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="UpdateProfile"
          component={UpdateProfile}
          options={{ headerShown: true }}
        />
        
      
      </Stack.Navigator>
    </NavigationContainer>
  );
}
