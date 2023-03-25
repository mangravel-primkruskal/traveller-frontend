import React from "react";
import { View, TextInput, StyleSheet } from "react-native";

const CustomInput = ({ placeholder, onChangeText }) => {
  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        placeholderTextColor={"#4B9D3D"}
        onChangeText={onChangeText}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    marginVertical: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  input: {
    backgroundColor: "#F4F4F4",
    color: "#4B9D3D",
    width: 300,
    height: 50,
    borderRadius: 30,
    justifyContent: "center",
    padding: 15,
    fontSize: 16,
    paddingLeft: 45,
    paddingVertical: 5,
  },
});

export default CustomInput;
