import { Container, MainInfo, Info } from "./styles";

export default function PriceChange(props) {
	const {
		priceChange24h,
		priceChangePercentage24h,
		priceChangePercentage7d,
		priceChangePercentage14d,
		priceChangePercentage30d,
		priceChangePercentage60d,
		priceChangePercentage200d,
		priceChangePercentage1y,
	} = props;
	return (
		<>
			<Container>
				<MainInfo
					color={priceChangePercentage24h > 0 ? "#008000" : "#F40000"}
				>
					Price change in the last 24hrs:{" "}
					<span>
						${priceChange24h.toFixed(2) + `(${priceChangePercentage24h.toFixed(2)}%)`}
					</span>
				</MainInfo>
				<Info
					color={priceChangePercentage7d > 0 ? "#008000" : "#F40000"}
				>
					Price change in the last 7d:{" "}
					<span>{priceChangePercentage7d.toFixed(2)}%</span>
				</Info>
				<Info
					color={priceChangePercentage14d > 0 ? "#008000" : "#F40000"}
				>
					Price change in the last 14d:{" "}
					<span>{priceChangePercentage14d.toFixed(2)}%</span>
				</Info>
				<Info
					color={priceChangePercentage30d > 0 ? "#008000" : "#F40000"}
				>
					Price change in the last 30d:{" "}
					<span>{priceChangePercentage30d.toFixed(2)}%</span>
				</Info>
				<Info
					color={priceChangePercentage60d > 0 ? "#008000" : "#F40000"}
				>
					Price change in the last 60d:{" "}
					<span>{priceChangePercentage60d.toFixed(2)}%</span>
				</Info>
				<Info
					color={priceChangePercentage200d > 0 ? "#008000" : "#F40000"}
				>
					Price change in the last 200d:{" "}
					<span>{priceChangePercentage200d.toFixed(2)}%</span>
				</Info>
				<Info
					color={priceChangePercentage1y > 0 ? "#008000" : "#F40000"}
				>
					Price change in the last 1y:{" "}
					<span>{priceChangePercentage1y.toFixed(2)}%</span>
				</Info>
			</Container>
		</>
	);
}
