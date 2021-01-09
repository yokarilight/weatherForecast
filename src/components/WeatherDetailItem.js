import PropTypes from "prop-types";
import WeatherIcons from "./WeatherIcons";
import WeatherState from "./WeatherState";

const WeatherDetailItem = (props) => {
  const { weather, main } = props;
  const { humidity } = main;
  const name = weather[0] ? weather[0].main : "Clear";
  return (
    <div>
      <div className="weatherItem">
        <WeatherIcons name={name} />
        <p>{name}</p>
        <div className="humidity">
          <WeatherState
            name="Humidity"
            value={`${humidity} %`}
            className="humidity-percent"
          />
        </div>
      </div>
    </div>
  );
};

WeatherDetailItem.propTypes = {
  weather: PropTypes.array.isRequired,
  main: PropTypes.object.isRequired,
};
export default WeatherDetailItem;
