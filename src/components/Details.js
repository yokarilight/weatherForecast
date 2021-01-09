import PropTypes from "prop-types";
import WeatherDetailItem from "./WeatherDetailItem";
import moment from "moment";

const DetailsForecast = ({ list }) => {
  return (
    <div className="forecast">
      {list
        .filter((reading) => reading.dt_txt.includes("18:00:00"))
        .map((item, index) => {
          let date = moment.unix(item.dt).format("MMMM Do YYYY");
          if (index === 0) {
            date = "Today";
          }
          return (
            <div className="forecast-daily" key={item.dt}>
              {date}
              <WeatherDetailItem main={item.main} weather={item.weather} />
            </div>
          );
        })}
    </div>
  );
};

DetailsForecast.propTypes = {
  list: PropTypes.array.isRequired,
};

export default DetailsForecast;
