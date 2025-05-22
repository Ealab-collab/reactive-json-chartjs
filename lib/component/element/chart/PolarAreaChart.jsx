import {ChartJS} from "./ChartJS.jsx";

export const PolarAreaChart = ({props}) => <ChartJS props={{...props, chartType: "polarArea"}}/>;
