import {
  WiDayThunderstorm,
  WiRainWind,
  WiDaySunny,
  WiDayShowers,
  WiDaySnowWind,
  WiDayFog,
  WiSmoke,
  WiCloudy,
} from "react-icons/wi";

const WeatherIcons = ({ name }) => {
  switch (name) {
    case "Thunderstorm":
      return <WiDayThunderstorm />;
    case "Drizzle":
      return <WiDayShowers />;
    case "Snow":
      return <WiDaySnowWind />;
    case "Mist":
    case "Fog":
      return <WiDayFog />;
    case "Smoke":
      return <WiSmoke />;
    case "Rain":
    case "Haze":
    case "Dust":
    case "Sand":
    case "Ash":
    case "Squall":
    case "Tornado":
      return <WiRainWind />;
    case "Clouds":
      return <WiCloudy />;
    default:
      return <WiDaySunny />;
  }
};

export default WeatherIcons;
