import { Container, TopBox, MiddleBox, BottomBox } from "./styles";

import Actually from "./Actually";
import MarketCap from "./MarketCap";
import PriceChange from "./PriceChange";
import AthAndAtl from "./AthAndAtl";
import Supply from "./Supply";

export default function OtherInfos(props) {
	const { symbol, coinMarketData } = props;

	const {
		currentPrice,
		high24h,
		low24h,
		marketCapRank,
		marketCap,
		marketCapChange24h,
		marketCapChangePercentage24h,
		priceChange24h,
		priceChangePercentage24h,
		priceChangePercentage7d,
		priceChangePercentage14d,
		priceChangePercentage30d,
		priceChangePercentage60d,
		priceChangePercentage200d,
		priceChangePercentage1y,
		atl,
		atlChangePercentage,
		atlDate,
		ath,
		athChangePercentage,
		athDate,
		totalSupply,
		circulatingSupply,
	} = coinMarketData;
	return (
		<>
			<Container>
				<TopBox>
					<Actually
						currentPrice={currentPrice}
						high24h={high24h}
						low24h={low24h}
					/>
					<MarketCap
						marketCapRank={marketCapRank}
						marketCap={marketCap}
						marketCapChange24h={marketCapChange24h}
						marketCapChangePercentage24h={
							marketCapChangePercentage24h
						}
					/>
				</TopBox>
				<MiddleBox>
					<PriceChange
						priceChange24h={priceChange24h}
						priceChangePercentage24h={priceChangePercentage24h}
						priceChangePercentage7d={priceChangePercentage7d}
						priceChangePercentage14d={priceChangePercentage14d}
						priceChangePercentage30d={priceChangePercentage30d}
						priceChangePercentage60d={priceChangePercentage60d}
						priceChangePercentage200d={priceChangePercentage200d}
						priceChangePercentage1y={priceChangePercentage1y}
					/>
				</MiddleBox>
				<BottomBox>
					<AthAndAtl
						atl={atl}
						atlChangePercentage={atlChangePercentage}
						atlDate={atlDate}
						ath={ath}
						athChangePercentage={athChangePercentage}
						athDate={athDate}
					/>
					<Supply
						symbol={symbol}
						totalSupply={totalSupply}
						circulatingSupply={circulatingSupply}
					/>
				</BottomBox>
			</Container>
		</>
	);
}
