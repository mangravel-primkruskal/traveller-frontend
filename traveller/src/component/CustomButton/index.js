import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";

export default function CustomButton(props) {
  return (
    <TouchableOpacity style={[styles.button, props.style]} {...props}>
      <Text style={styles.buttonText}>{props.title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#4B9D3D",
    color: "gray",
    minWidth: 150,
    minHeight: 40,
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
    padding: 15,
    fontSize: 16,
    paddingVertical: 5,
    marginTop: 10,
  },
  buttonText: {
    fontSize: 16,
    color: "white",
    fontWeight: "bold",
  },
});
