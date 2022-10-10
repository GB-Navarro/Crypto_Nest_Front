import { Section, Tittle } from "./styles";

import Charts from "./Charts/Charts";
import OtherInfos from "./OtherInfos/OtherInfos";

export default function CoinMarketData(props) {
	const { name, symbol, coinMarketData } = props;

	return (
		<>
			<Section>
				<Tittle>Market Info</Tittle>
				<Charts name={name} coinMarketData={coinMarketData} />
				<OtherInfos name={name} symbol={symbol} coinMarketData={coinMarketData} />
			</Section>
		</>
	);
}
