import React, { useEffect, useState } from "react";
import {
  View,
  TouchableOpacity,
  Text,
  SafeAreaView,
  StyleSheet,
} from "react-native";

import { SimpleLineIcons } from "@expo/vector-icons";

export default function CustomTabBar({ state, descriptors, navigation }) {
  return (
    <SafeAreaView
      style={{
        backgroundColor: "transparent",
        justifyContent: "center",
        alignItems: "center",
        position: "absolute",
        bottom: 0,
        width: "100%",
        marginBottom: 20,
      }}
    >
      <View style={styles.container}>
        {state.routes.map((route, index) => {
          const { options } = descriptors[route.key];
          const label = route.name;
          const icon = route?.params?.icon;

          const isFocused = state.index === index;

          const onPress = () => {
            const event = navigation.emit({
              type: "tabPress",
              target: route.key,
            });

            if (!isFocused && !event.defaultPrevented) {
              navigation.navigate(route.name);
            }
          };

          const onLongPress = () => {
            navigation.emit({
              type: "tabLongPress",
              target: route.key,
            });
          };

          if(label !== "Yeni Gönderi")
          if(label !== "Profili Güncelle")
          if(label !== "Arama Sonuçları")
          return (
            <TouchableOpacity
              accessibilityRole="button"
              key={index}
              accessibilityStates={isFocused ? ["selected"] : []}
              accessibilityLabel={options.tabBarAccessibilityLabel}
              testID={options.tabBarTestID}
              style={[
                styles.menuButton,
                { backgroundColor: isFocused ? "whitesmoke" : "transparent" },
              ]}
              onPress={onPress}
              onLongPress={onLongPress}
            >
              {label === "Profil" && (
                <SimpleLineIcons
                  name="user"
                  style={{ color: "black", fontSize: 20 }}
                />
              )}
              {label === "Anasayfa" && (
                <SimpleLineIcons
                  name="home"
                  style={{ color: "black", fontSize: 20 }}
                />
              )}
                
              <Text style={{ marginTop: 5 }}>{label}</Text>
            </TouchableOpacity>
          );
        })}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    height: 60,
    width: "90%",
    justifyContent: "center",
    backgroundColor: "white",
    alignItems: "center",
    borderRadius: 20,
    shadowColor: "#000",
    shadowOffset: { width: 1, height: -1 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    borderWidth: 1,
    borderColor: "rgba(52, 168, 83, 0.4)",
  },
  menuButton: {
    flex: 1,
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
  },
});
