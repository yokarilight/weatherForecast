import { useContext, useState, useEffect } from "react";
import { Layout, Col, Row } from "antd";
import "./App.css";
import Filter from "./components/Filter";
import { Context as WeatherContext } from "./context/weatherContext";
import WeatherSummary from "./components/WeatherSummary";
import Graph from "./components/Graph";
import DetailsForecast from "./components/Details";
import { usePosition } from "use-position";

const App = () => {
  const contextValue = useContext(WeatherContext);
  const { state, getWeatherData, getForecast } = contextValue;

  const watch = true;

  const { latitude, longitude } = usePosition(watch);

  useEffect(() => {
    if (latitude && longitude) {
      const place = {
        latitude,
        longitude,
      };
      getWeatherData(place);
      setTimeout(() => {
        getForecast(place);
      }, 900);
    }
  }, [latitude, longitude]);

  const onFinish = (values) => {
    getWeatherData(values);
    setTimeout(() => {
      getForecast(values);
    }, 900);
  };

  return (
    <Layout>
      <Row>
        <Col lg={6} md={6} xs={24}>
          <Filter onFinish={onFinish} />
          {Object.keys(state.data).length > 0 ? (
            <WeatherSummary
              weather={state.data.weather}
              wind={state.data.wind}
              main={state.data.main}
            />
          ) : null}
        </Col>
        <Col lg={18} md={18} xs={24}>
          {/*<Content className="site-layout" style={{padding: '0 50px', marginTop: 64}}>*/}
          <div
            className="site-layout-background"
            style={{ padding: 24, minHeight: 380 }}
          >
            {Object.keys(state.forecast).length > 0 ? (
              <>
                <Graph list={state.forecast.list} />
                <DetailsForecast list={state.forecast.list} />
              </>
            ) : null}
          </div>
          {/*</Content>*/}
        </Col>
      </Row>
    </Layout>
  );
};

export default App;
