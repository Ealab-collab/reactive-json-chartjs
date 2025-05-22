import {ChartJS} from "./ChartJS.jsx";

export const BarChart = ({props}) => <ChartJS props={{...props, chartType: "bar"}}/>;
