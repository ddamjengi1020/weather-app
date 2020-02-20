import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import propTypes from "prop-types";

const weatherCases = {
  Thunderstorm: {
    icon: "ios-thunderstorm",
    gradient: ["#373B44", "#4286f4"],
    title: "천둥번개",
    subtitle: "감전되지않게 조심하세요"
  },
  Drizzle: {
    icon: "md-rainy",
    gradient: ["#6190E8", "#A7BFE8"],
    title: "이슬비",
    subtitle: `보슬보슬 비가 내립니다.
외출시 우산을 챙겨주세요.`
  },
  Rain: {
    icon: "ios-rainy",
    gradient: ["#1e3c72", "#2a5298"],
    title: "비",
    subtitle: `비가 많이 오네요.
장우산으로 온몸을 보호하세요`
  },
  Snow: {
    icon: "ios-snow",
    gradient: ["#0052D4", "#65C7F7", "#9CECFB"],
    title: "눈",
    subtitle: "뽀득뽀득, 눈길에 미끄러지지 않게 조심하세요"
  },
  Mist: {
    icon: "ios-eye-off",
    gradient: ["#7F7FD5", "#86A8E7", "#91EAE4"],
    title: "안개",
    subtitle: `앞이 잘 보이지 않을 수 있어요.
조심하세요.`
  },
  Smoke: {
    icon: "ios-flame",
    gradient: ["#0F2027", "#203A43", "#91EAE4"],
    title: "연기",
    subtitle: `어디서 불이 났나봐요.
마스크를 챙겨주세요.`
  },
  Haze: {
    icon: "ios-eye-off",
    gradient: ["#7F7FD5", "#86A8E7", "#91EAE4"],
    title: "안개",
    subtitle: `앞이 잘 보이지 않을 수 있어요.
조심하세요.`
  },
  Dust: {
    icon: "ios-sad",
    gradient: ["#636363", "#a2ab58"],
    title: "먼지",
    subtitle: "황사라니... 외출을 자제해주세요."
  },
  Fog: {
    icon: "ios-eye-off",
    gradient: ["#7F7FD5", "#86A8E7", "#91EAE4"],
    title: "안개",
    subtitle: `앞이 잘 보이지 않을 수 있어요.
조심하세요.`
  },
  Sand: {
    icon: "ios-sad",
    gradient: ["#403B4A", "#E7E9BB"],
    title: "모래바람",
    subtitle: "눈을 보호해주세요"
  },
  Ash: {
    icon: "md-bonfire",
    gradient: ["#3f4c6b", "#606c88"],
    title: "화산재",
    subtitle: "이불밖은 위험해"
  },
  Squall: {
    icon: "md-walk",
    gradient: ["#ACB6E5", "#74ebd5"],
    title: "돌풍",
    subtitle: `이쁜 머리 다 망가지겠어요.
외출을 자제해주세요.`
  },
  Tornado: {
    icon: "md-bed",
    gradient: ["#191654", "#43C6AC"],
    title: "폭풍",
    subtitle: "집 유리창 안깨지나 지켜봐주세요"
  },
  Clear: {
    icon: "md-sunny",
    gradient: ["#ee9ca7", "#ffdde1"],
    title: "맑음",
    subtitle: "화창한 날씨 나들이 어떠세요? "
  },
  Clouds: {
    icon: "ios-cloudy",
    gradient: ["#2c3e50", "#bdc3c7"],
    title: "흐림",
    subtitle: `구름이 하늘을 덮었어요.
햇빛빨이 없으니 조심하세요`
  }
};
// weatherCases[condition].gradient
export default Weather = ({ temp, condition }) => {
  return (
    <LinearGradient
      colors={weatherCases[condition].gradient}
      style={styles.container}
    >
      <View style={styles.halfContainer}>
        <Ionicons name={weatherCases[condition].icon} size={95} color="white" />
        <Text style={styles.temp}>{temp}℃</Text>
      </View>
      <View style={{ ...styles.halfContainer, ...styles.anotherHalf }}>
        <Text style={styles.title}>{weatherCases[condition].title}</Text>
        <Text style={styles.subtitle}>{weatherCases[condition].subtitle}</Text>
      </View>
    </LinearGradient>
  );
};

Weather.propTypes = {
  temp: propTypes.number.isRequired,
  condition: propTypes.oneOf([
    "Thunderstorm",
    "Drizzle",
    "Rain",
    "Snow",
    "Mist",
    "Smoke",
    "Haze",
    "Dust",
    "Fog",
    "Sand",
    "Ash",
    "Squall",
    "Tornado",
    "Clear",
    "Clouds"
  ]).isRequired
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 35
  },
  temp: {
    fontSize: 32,
    color: "white"
  },
  halfContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  anotherHalf: {
    alignItems: "flex-start"
  },
  title: {
    fontSize: 27,
    color: "white",
    fontWeight: "bold",
    marginBottom: 15
  },
  subtitle: {
    color: "white",
    fontSize: 23
  }
});
