/**
 * Line chart for Reactive-JSON.
 *
 * @author Yosri SAYADI <yosri@emerya.fr>
 */
import {ActionDependant} from "@ea-lab/reactive-json";
import {GlobalDataContext} from "@ea-lab/reactive-json";
import {TemplateContext} from "@ea-lab/reactive-json";
import {evaluateTemplateValue, useEvaluatedAttributes} from "@ea-lab/reactive-json";
import {
    CategoryScale,
    Chart as ChartJS, Filler,
    Legend,
    LinearScale,
    LineElement, PointElement,
    Title,
    Tooltip,
} from "chart.js";
import {useContext} from "react";
import {Line} from "react-chartjs-2";

// Register the necessary modules for Chart.js.
ChartJS.register(CategoryScale, LinearScale, LineElement, PointElement, Title, Tooltip, Legend, Filler);

const LineChart = ({props}) => {
    const globalDataContext = useContext(GlobalDataContext);
    const templateContext = useContext(TemplateContext);
    const attributes = useEvaluatedAttributes(props.attributes);

    const options = props.options || {};

    const chartData = evaluateTemplateValue({
        valueToEvaluate: props.data,
        globalDataContext,
        templateContext,
    });

    return (
        <ActionDependant {...props}>
            {chartData && <Line {...attributes} data={chartData} options={options}/>}
        </ActionDependant>
    );
};

export default LineChart;
