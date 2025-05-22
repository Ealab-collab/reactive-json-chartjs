/**
 * Entry point for the lib.
 */
import {BarChart, ChartJS, DoughnutChart, LineChart, PolarAreaChart} from "./component/element/chart";

export const chartjsComponents = {
    "element": {
        BarChart,
        ChartJS,
        DoughnutChart,
        LineChart,
        PolarAreaChart,
    },
};

export * from "./component/element/chart";
