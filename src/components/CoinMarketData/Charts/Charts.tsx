import { LineChartsContainer, LineChartBox, PieChartBox } from "./styles";

import AtlToAthChart from "./AtlToAth";
import PriceChangePercentageChart from "./PriceChangePercentage";
import TotalAndCirculatingSupplyChart from "./TotalAndCirculatingSupply";

export default function Charts(props) {
	const { name, coinMarketData } = props;

	return (
		<>
			<LineChartsContainer>
				<LineChartBox>
					<AtlToAthChart
						name={name}
						coinMarketData={coinMarketData}
					/>
				</LineChartBox>
				<LineChartBox>
					<PriceChangePercentageChart
						name={name}
						coinMarketData={coinMarketData}
					/>
				</LineChartBox>
			</LineChartsContainer>
			<PieChartBox>
				<TotalAndCirculatingSupplyChart
					name={name}
					coinMarketData={coinMarketData}
				/>
			</PieChartBox>
		</>
	);
}
