import LinearChart from "../../../LinearChart/LinearChart";

export default function PriceChangePercentageChart(props) {
	const { name, coinMarketData } = props;

	const {
		priceChangePercentage24h,
		priceChangePercentage7d,
		priceChangePercentage14d,
		priceChangePercentage30d,
		priceChangePercentage60d,
		priceChangePercentage200d,
		priceChangePercentage1y,
	} = coinMarketData;

	const yAxis = [
		priceChangePercentage24h,
		priceChangePercentage7d,
		priceChangePercentage14d,
		priceChangePercentage30d,
		priceChangePercentage60d,
		priceChangePercentage200d,
		priceChangePercentage1y,
	];

	const xAxis = ["0", "7d", "14d", "30d", "60d", "200d", "1y"];

	return (
		<>
			<LinearChart
				text={"1 Year price change (%)"}
				xAxis={xAxis}
				yAxis={yAxis}
				datasetName={`${name} Price`}
			></LinearChart>
		</>
	);
}
