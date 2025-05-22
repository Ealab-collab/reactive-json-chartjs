import {ActionDependant, useEvaluatedAttributes} from "@ea-lab/reactive-json";
import {evaluateTemplateValueCollection} from "@ea-lab/reactive-json";
import {GlobalDataContext, TemplateContext} from "@ea-lab/reactive-json";
import {Chart as ChartJSCore, registerables} from "chart.js";
import {Chart as ReactChartJS2} from "react-chartjs-2";
import {useContext, useRef, useEffect} from "react";

// Enregistre tous les types Chart.js
ChartJSCore.register(...registerables);

/**
 * ChartJS main component.
 */
export const ChartJS = ({props}) => {
    const attributes = useEvaluatedAttributes(props.attributes);

    // Accès aux contextes de données pour l'évaluation
    const globalDataContext = useContext(GlobalDataContext);
    const templateContext = useContext(TemplateContext);

    // Évaluation dynamique des données Chart.js
    const chartType = props.chartType;
    const data = evaluateTemplateValueCollection({
        valueToEvaluate: props.data,
        globalDataContext,
        templateContext
    });
    const options = evaluateTemplateValueCollection({
        valueToEvaluate: props.options,
        globalDataContext,
        templateContext
    });
    const plugins = evaluateTemplateValueCollection({
        valueToEvaluate: props.plugins,
        globalDataContext,
        templateContext
    });

    const height = evaluateTemplateValueCollection({
        valueToEvaluate: props.height,
        globalDataContext,
        templateContext
    });
    const width = evaluateTemplateValueCollection({
        valueToEvaluate: props.width,
        globalDataContext,
        templateContext
    });

    const chartRef = useRef(null);

    useEffect(() => {
        // (optionnel) chartRef.current?.reset();
    }, [data, options]);

    if (!chartType || !data) return null;

    return (
        <ActionDependant {...props}>
            <ReactChartJS2
                ref={chartRef}
                type={chartType}
                data={data}
                options={options}
                plugins={plugins}
                height={height}
                width={width}
                {...attributes}
            />
        </ActionDependant>
    );
};
