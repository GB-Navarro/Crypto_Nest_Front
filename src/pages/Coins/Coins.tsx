import { useState, useEffect, useContext } from "react";
import { Container, Box, Background, LoadingBox } from "./styles";

import axios from "axios";
import Loading from "../../components/Loading/Loading";
import UserHeader from "../../components/UserHeader/UserHeader";
import ParticlesBackground from "../../components/Particles/Particles";
import Coin from "../../components/Coin/Coin";
import userContext from "../../context/userContext";

export default function Coins() {

	const { token }: any = useContext(userContext);
	const [coinsData, setCoinsData] = useState(null);

	const url = "https://crypto-nest-api.herokuapp.com/coins/getAll";

	const config = {
		headers: {
			Authorization: `Bearer ${token}`,
		},
	};

	useEffect(() => {
		const promisse = axios.get(url, config);
		promisse.then((response) => {
			setCoinsData(response.data);
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
