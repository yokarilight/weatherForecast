import createDataContext from "./createDataContext";
import weatherApi from "../api/";
import { api_key } from "../constants/api_url";

const weatherReducer = (state, action) => {
  switch (action.type) {
    case "set_weather":
      return { ...state, data: action.payload };
    case "set_forecast":
      return { ...state, forecast: action.payload };
    default:
      return state;
  }
};

const getWeatherData = (dispatch) => async (place) => {
  console.log("place", place);
  let uri = "";
  if (place.location) {
    uri = `weather?q=${place.location}`;
  } else if (place.latitude && place.longitude) {
    uri = `weather?lat=${place.latitude}&lon=${place.longitude}`;
  }

  const response = await weatherApi({
    method: "get",
    url: `${uri}&appid=${api_key}`,
  });

  dispatch({ type: "set_weather", payload: response.data });
};

const getForecast = (dispatch) => async (place) => {
  console.log("place:", place);
  let uri = "";
  if (place.location) {
    uri = `forecast?q=${place.location}`;
  } else if (place.latitude && place.longitude) {
    uri = `forecast?lat=${place.latitude}&lon=${place.longitude}`;
  }

  const response = await weatherApi({
    method: "get",
    url: `${uri}&appid=${api_key}`,
  });
  dispatch({ type: "set_forecast", payload: response.data });
};

export const { Provider, Context } = createDataContext(
  weatherReducer,
  { getWeatherData, getForecast },
  { data: {}, forecast: {} }
);
