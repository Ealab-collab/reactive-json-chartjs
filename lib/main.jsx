/**
 * Entry point for the lib.
 */
import BarChart from "./component/element/chart/BarChart.jsx";
import DoughnutChart from "./component/element/chart/DoughnutChart.jsx";
import LineChart from "./component/element/chart/LineChart.jsx";
import PolarAreaChart from "./component/element/chart/PolarAreaChart.jsx";

export const chartjsComponents = {
    "element": {
        BarChart,
        DoughnutChart,
        LineChart,
        PolarAreaChart,
    },
};

export * from "./component/element/chart";
