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

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="TabNavigator"
          component={Home}
          options={{ headerShown: false }}
        />
        <Stack.Screen
        name="Login"
        component={Login}
        />
         <Stack.Screen
        name="Register"
        component={Register}
        options={{
          headerTitle: () => (
            <Text style={{ fontSize: 20, fontWeight: "bold"}}>
              Kayıt Ol
            </Text>
          ),
        }}/>
         <Stack.Screen
        name="ForgotPassword"
        component={ForgotPassword}
        options={{
          headerTitle: () => (
            <Text style={{ fontSize: 20, fontWeight: "bold"}}>
              Şifremi Unuttum
            </Text>
          ),
        }}/>
        <Stack.Screen
        name="GoogleMaps"
        component={GoogleMaps}
        options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
