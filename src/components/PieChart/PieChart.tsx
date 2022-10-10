import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";

export default function PieChart(props) {
	ChartJS.register(ArcElement, Tooltip, Legend);

	const { labels, values, datasetName } = props;
	const data = {
		labels: labels,
		datasets: [
			{
				label: datasetName,
				data: values,
				backgroundColor: [
					"rgba(255, 195, 0, 0.5)",
					"rgba(0, 53, 102, 0.5)",
				],
				borderColor: ["#ffc300", "#003566"],
				borderWidth: 1,
			},
		],
	};
	return <Pie data={data} />;
}
