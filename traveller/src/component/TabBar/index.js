import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import { Text } from "react-native";

import Home from "../../page/home/index";
import Maps from "../../page/maps";
import CustomTabBar from "../CustomTabBar";

const Tab = createBottomTabNavigator();

export default function TabNavigatorComponent() {
  return (
    <Tab.Navigator tabBar={(props) => <CustomTabBar {...props} />}>
      <Tab.Screen
        name="Anasayfa"
        options={{
          headerTitle: () => (
            <Text style={{ fontSize: 24, fontWeight: "500", color: "white" }}>
              Keşfet
            </Text>
          ),
          headerRight: () => (
            <Ionicons
              name="notifications"
              style={{ marginRight: 42 }}
              size={24}
              color="white"
            />
          ),
          headerStyle: {
            backgroundColor: "#3D7734",
          },
        }}
        component={Home}
      />
      <Tab.Screen name="Profil" component={Maps} />
    </Tab.Navigator>
  );
}
