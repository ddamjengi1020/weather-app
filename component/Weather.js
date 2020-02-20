import React from "react";
import { View, Text, StyleSheet } from "react-native";
import propTypes from "prop-types";

export default Weather = ({ temp }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{temp}℃</Text>
    </View>
  );
};

Weather.propTypes = {
  temp: propTypes.number.isRequired
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  text: {
    fontSize: 20
  }
});
