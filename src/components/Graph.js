import { useRef, useEffect, useState } from "react";
import Chartjs from "chart.js";
import PropTypes from "prop-types";
import classes from "./lineChart.css";

const Graph = ({ list }) => {
  const chartRef = useRef(null);
  const [, setChartInstance] = useState(null);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const chartData = {
    type: "line",
  };

  let labels = [];
  let data = [];

  list
    .filter((reading) => reading.dt_txt.includes("18:00:00"))
    .map((item) => {
      labels.push(item.main.temp);
      data.push(item.main.temp);
      return 0;
    });

  chartData.data = {
    labels: labels,
    datasets: [
      {
        label: "Temp",
        data: data,
      },
    ],
  };

  // useEffect(() => {
  //     if (chartRef && chartRef.current) {
  //         const newChartInstance = new Chartjs(chartRef.current, chartData);
  //         setChartInstance(newChartInstance);
  //     }
  // }, [chartData, chartRef]);

  return (
    <div className={classes.graphContainer}>
      <canvas id="my-chart" ref={chartRef} />
    </div>
  );
};

Graph.propTypes = {
  list: PropTypes.array.isRequired,
};

export default Graph;
