import React from "react";
import { Alert } from "react-native";
import * as Location from "expo-location";
import Loading from "./component/Loading";
import axios from "axios";
import Weather from "./component/Weather";

export default class extends React.Component {
  state = {
    isLoading: true
  };

  getWeather = async (lat, lon) => {
    const api_key = "05e861ef04af1d852ee529cda103e05a";
    const { data } = await axios.get(
      `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&APPID=${api_key}&units=metric`
    );
    this.setState({ isLoading: false, temp: data.main.temp });
  };
  getLocation = async () => {
    try {
      await Location.requestPermissionsAsync();
      const {
        coords: { latitude: lat, longitude: lon }
      } = await Location.getCurrentPositionAsync();
      this.getWeather(lat, lon);
    } catch (error) {
      Alert.alert("Don't find you", "so bad ㅠ");
    }
  };

  componentDidMount() {
    this.getLocation();
  }

  render() {
    const { isLoading, temp } = this.state;
    return isLoading ? <Loading /> : <Weather temp={Math.round(temp)} />;
  }
}
