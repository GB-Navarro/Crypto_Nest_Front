import { useState, useEffect } from "react";
import { Container, Box, Background, LoadingBox } from "./styles";

import axios from "axios";
import Loading from "../../components/Loading/Loading";
import UserHeader from "../../components/UserHeader/UserHeader";
import ParticlesBackground from "../../components/Particles/Particles";
import Coin from "../../components/Coin/Coin";

export default function Coins() {
	const [coinsData, setCoinsData] = useState(null);

	const url = "https://crypto-nest-api.herokuapp.com/coins/getAll";

	const config = {
		headers: {
			Authorization:
				"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsInVzZXJFbWFpbCI6InRlc3RlMUBnbWFpbC5jb20iLCJpYXQiOjE2NjUzMTIyNjcsImV4cCI6MTY2NTMxNTg2N30.ZE_7_H0l_zMG-lZ8k1H1A9wPLKhUvJ27s_4tELNGBhQ",
		},
	};

	useEffect(() => {
		const promisse = axios.get(url, config);
		promisse.then((response) => {
			setCoinsData(response.data);
			console.log(response.data);
		});
	}, []);

	return (
		<>
			<UserHeader></UserHeader>
			<Background>
				<ParticlesBackground></ParticlesBackground>
			</Background>
			{coinsData === null ? (
				<Container>
					<LoadingBox>
						<Loading />
					</LoadingBox>
				</Container>
			) : (
				<>
					<Container>
						<Box>
							{coinsData.map((coin: any) => {
								const { coinInfo, coinMarketData } = coin;
								const { id, name, image } = coinInfo;
								const {
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
								} = coinMarketData;
								return (
									<Coin
										id={id}
										name={name}
										image={image}
										currentPrice={currentPrice}
										marketCap={marketCap}
										marketCapRank={marketCapRank}
										priceChangePercentage24h={
											priceChangePercentage24h
										}
										priceChangePercentage7d={
											priceChangePercentage7d
										}
										priceChangePercentage14d={
											priceChangePercentage14d
										}
										priceChangePercentage30d={
											priceChangePercentage30d
										}
										priceChangePercentage60d={
											priceChangePercentage60d
										}
										priceChangePercentage200d={
											priceChangePercentage200d
										}
										priceChangePercentage1y={
											priceChangePercentage1y
										}
									/>
								);
							})}
						</Box>
					</Container>
				</>
			)}
		</>
	);
}
