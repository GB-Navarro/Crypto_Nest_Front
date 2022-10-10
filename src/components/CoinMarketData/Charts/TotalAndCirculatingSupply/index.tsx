import PieChart from "../../../PieChart/PieChart";

export default function TotalAndCirculatingSupplyChart(props) {
	const { name, coinMarketData } = props;
	const { totalSupply, circulatingSupply } = coinMarketData;

	const labels = ["Total supply", "Circulating supply"];
	const values = [totalSupply, circulatingSupply];

	return (
		<>
			<PieChart
				labels={labels}
				values={values}
				datasetName={`${name} (Total supply / Circulating supply)`}
			></PieChart>
		</>
	);
}