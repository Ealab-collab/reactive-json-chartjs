import {ChartJS} from "./ChartJS.jsx";

export const DoughnutChart = ({props}) => <ChartJS props={{...props, chartType: "doughnut"}}/>;
