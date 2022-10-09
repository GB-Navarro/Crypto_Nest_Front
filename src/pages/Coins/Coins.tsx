import { useState, useEffect } from "react";
import { Container, Box, Background, LoadingBox } from "./styles";

//colocar todas as infos que vem do back-end
//colocar um icone para os preços verdes e um icone pros preços vermelhos
//o nome das criptos ta zoando o espaçamento delas!!
//formatar melhor os números (criar função pra formatar o marketcap)
//melhorar a semantica das tags
//ajustar o overflow-x
//ajustar a questão do nome do usuário
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
				"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsInVzZXJFbWFpbCI6InRlc3RlMUBnbWFpbC5jb20iLCJpYXQiOjE2NjUzMDY5NDQsImV4cCI6MTY2NTMxMDU0NH0.fQ0LNA7KORSfCgi6-83ggyCcNEFivNRT4Rvon4IUuwU",
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
			{/*<Background>
				<ParticlesBackground></ParticlesBackground>
			</Background> */}
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
