import {
	CoinBox,
	Id,
	CoinInfo,
	Aside,
	Image,
	Description,
	Info,
	ArrowUpBox,
	ArrowDownBox,
} from "./styles";
import { Link } from "react-router-dom";

import IonIcon from "@reacticons/ionicons";

export default function Coin(props) {
	const {
		id,
		name,
		image,
		currentPrice,
		marketCap,
		marketCapRank,
		priceChangePercentage24h,
		priceChangePercentage7d,
		priceChangePercentage14d,
		priceChangePercentage30d,
		priceChangePercentage60d,
		priceChangePercentage200d,
		priceChangePercentage1y,
	} = props;

	const url = `/coin/${id}`;

	return (
		<>
			<Link to={url}>
				<CoinBox>
					<Id>{id}</Id>
					<Aside>
						<Description>
							{marketCapRank + ". "} {name}
						</Description>
						<Image src={image} alt="Coin Image" />
					</Aside>
					<CoinInfo>
						<Description>Price</Description>
						<Info>{"$" + currentPrice}</Info>
					</CoinInfo>
					<CoinInfo>
						<Description>MarketCap</Description>
						<Info>{"$" + marketCap}</Info>
					</CoinInfo>
					<CoinInfo>
						<Description>24h</Description>
						<Info
							color={
								priceChangePercentage24h > 0
									? "#008000"
									: "#F40000"
							}
						>
							{priceChangePercentage24h !== undefined
								? priceChangePercentage24h.toFixed(2) + "%"
								: ""}
						</Info>
					</CoinInfo>
					<CoinInfo>
						<Description>7d</Description>
						<Info
							color={
								priceChangePercentage7d > 0
									? "#008000"
									: "#F40000"
							}
						>
							{priceChangePercentage7d !== undefined
								? priceChangePercentage7d.toFixed(2) + "%"
								: ""}
						</Info>
					</CoinInfo>
					<CoinInfo>
						<Description>14d</Description>
						<Info
							color={
								priceChangePercentage14d > 0
									? "#008000"
									: "#F40000"
							}
						>
							{priceChangePercentage14d !== undefined
								? priceChangePercentage14d.toFixed(2) + "%"
								: ""}
						</Info>
					</CoinInfo>
					<CoinInfo>
						<Description>30d</Description>
						<Info
							color={
								priceChangePercentage30d > 0
									? "#008000"
									: "#F40000"
							}
						>
							{priceChangePercentage30d !== undefined
								? priceChangePercentage30d.toFixed(2) + "%"
								: ""}
						</Info>
					</CoinInfo>
					<CoinInfo>
						<Description>60d</Description>
						<Info
							color={
								priceChangePercentage60d > 0
									? "#008000"
									: "#F40000"
							}
						>
							{priceChangePercentage60d !== undefined
								? priceChangePercentage60d.toFixed(2) + "%"
								: ""}
						</Info>
					</CoinInfo>
					<CoinInfo>
						<Description>200d</Description>
						<Info
							color={
								priceChangePercentage200d > 0
									? "#008000"
									: "#F40000"
							}
						>
							{priceChangePercentage200d !== undefined
								? priceChangePercentage200d.toFixed(2) + "%"
								: ""}
						</Info>
					</CoinInfo>
					<CoinInfo>
						<Description>1y</Description>
						<Info
							color={
								priceChangePercentage1y > 0
									? "#008000"
									: "#F40000"
							}
						>
							{priceChangePercentage1y !== undefined
								? priceChangePercentage1y.toFixed(2) + "%"
								: ""}
						</Info>
					</CoinInfo>
				</CoinBox>
			</Link>
		</>
	);
}
