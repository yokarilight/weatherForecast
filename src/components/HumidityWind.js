import PropTypes from "prop-types";
import WeatherState from "./WeatherState";

const HumidityWind = (props) => {
  const { humidity, wind } = props;
  return (
    <div className="humidity-wind">
      <div className="humidity">
        <WeatherState
          name="Humidity"
          value={`${humidity} %`}
          className="humidity-percent"
        />
      </div>
      <div className="wind">
        <WeatherState
          name="Wind speed"
          value={`${wind} km/h`}
          className="wind-speed"
        />
      </div>
    </div>
  );
};

HumidityWind.propTypes = {
  humidity: PropTypes.number.isRequired,
  wind: PropTypes.number.isRequired,
};

export default HumidityWind;
