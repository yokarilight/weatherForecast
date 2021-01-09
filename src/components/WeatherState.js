import { Fragment } from "react";
import PropTypes from "prop-types";
const WeatherState = (props) => {
  const { name, value, className } = props;
  return (
    <Fragment>
      <p>{name}</p>
      <span className={className}>{value}</span>
    </Fragment>
  );
};

WeatherState.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  className: PropTypes.string,
};

export default WeatherState;
