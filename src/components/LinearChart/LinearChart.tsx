import {
	Chart as ChartJS,
	CategoryScale,
	LinearScale,
	PointElement,
	LineElement,
	Title,
	Tooltip,
	Filler,
	Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
	CategoryScale,
	LinearScale,
	PointElement,
	LineElement,
	Title,
	Tooltip,
	Filler,
	Legend
);

export default function LinearChart(props) {
  const { text, xAxis: labels, yAxis: values, datasetName } = props;

	const options = {
		responsive: true,
		plugins: {
			legend: {
				position: "top" as const,
			},
			title: {
				display: true,
				text: text,
			},
		},
	};

	const data = {
		labels,
		datasets: [
			{
				fill: true,
				label: datasetName,
				data: values,
				borderColor: "#ffc300",
				backgroundColor: "rgb(255, 214, 10, 0.5)",
			},
		],
	};

	return <Line options={options} data={data} />;
}
