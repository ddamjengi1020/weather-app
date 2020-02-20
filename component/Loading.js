import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default Loading = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Today Weather?</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffeaa7",
    paddingHorizontal: 30,
    paddingVertical: 100,
    justifyContent: "flex-end"
  },
  text: {
    fontSize: 30
  }
});
