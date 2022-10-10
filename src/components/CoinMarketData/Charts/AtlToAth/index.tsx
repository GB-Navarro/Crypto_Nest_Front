import utilityFunctions from "../../utils/utilityFunctions";
import LinearChart from "../../../LinearChart/LinearChart";
export default function AtlToAthChart(props) {
	const { name, coinMarketData } = props;

	const { atl, ath, atlDate, athDate } = coinMarketData;

	const yAxis = [atl, ath];

	const xAxis = [utilityFunctions.formatDate(atlDate), utilityFunctions.formatDate(athDate)];

	return (
		<>
			<LinearChart
				text={"ATL To ATH"}
				xAxis={xAxis}
				yAxis={yAxis}
				datasetName={`${name} Price`}
			></LinearChart>
		</>
	);
}