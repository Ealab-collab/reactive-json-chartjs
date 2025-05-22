import {ChartJS} from "./ChartJS.jsx";

export const LineChart = ({props}) => <ChartJS props={{...props, chartType: "line"}}/>;
