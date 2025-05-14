/**
 * Doughnut chart for Reactive-JSON.
 *
 * @author Yosri SAYADI <yosri@emerya.fr>
 */
import {ActionDependant} from "@ea-lab/reactive-json";
import {GlobalDataContext} from "@ea-lab/reactive-json";
import {TemplateContext} from "@ea-lab/reactive-json";
import {evaluateTemplateValue, useEvaluatedAttributes} from "@ea-lab/reactive-json";
import {Chart as ChartJS, ArcElement, Tooltip, Legend} from "chart.js";
import {useContext} from "react";
import {Doughnut} from "react-chartjs-2";

// Registering necessary components for Chart.js
ChartJS.register(ArcElement, Tooltip, Legend);

const DoughnutChart = ({props}) => {
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
            {chartData && <Doughnut {...attributes} data={chartData} options={options}/>}
        </ActionDependant>
    );
};

export default DoughnutChart;
