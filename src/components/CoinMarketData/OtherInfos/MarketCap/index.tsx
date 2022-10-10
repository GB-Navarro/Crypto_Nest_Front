import { Container, Info } from "./styles";

export default function MarketCap(props) {
	const {
		marketCapRank,
		marketCap,
		marketCapChange24h,
		marketCapChangePercentage24h,
	} = props;
	return (
		<>
			<Container>
				<Info>
					Marketcap Rank: <span>${marketCapRank}</span>
				</Info>
				<Info>
					Marketcap Value: <span>${marketCap}</span>
				</Info>
				<Info color={marketCapChangePercentage24h > 0 ? "#008000" : "#F40000"}>
					Marketcap change in 24hrs:{" "}
					<span>
						${marketCapChange24h.toFixed(2) + " " + `(${marketCapChangePercentage24h.toFixed(2)}%)`}
					</span>
				</Info>
			</Container>
		</>
	);
}
