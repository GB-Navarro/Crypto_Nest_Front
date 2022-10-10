import {
	Container,
	SectionBox,
	Tittle,
	LoadingContainer,
	LoadingBox,
} from "./styles";
import { useParams } from "react-router-dom";
import { useState, useEffect, useContext } from "react";

import axios from "axios";
import Loading from "../../components/Loading/Loading";
import UserHeader from "../../components/UserHeader/UserHeader";
import CoinGeneralInfo from "../../components/CoinGeneralInfo/CoinGeneralInfo";
import CoinMarketData from "../../components/CoinMarketData/CoinMarketData";
import userContext from "../../context/userContext";

export default function Coin() {
	const [coinData, setCoinData] = useState(null);

	const { id } = useParams();
	const { token }: any = useContext(userContext);

	const url = `https://crypto-nest-api.herokuapp.com/coins/get/${id}`;

	const config = {
		headers: {
			Authorization:
				`Bearer ${token}`,
		},
	};

	useEffect(() => {
		const promisse = axios.get(url, config);

		promisse.then((response) => {
			setCoinData(response.data);
		});
	}, []);

	return (
		<>
			<UserHeader></UserHeader>
			{coinData === null ? (
				<>
					<LoadingContainer>
						<LoadingBox>
							<Loading />
						</LoadingBox>
					</LoadingContainer>
				</>
			) : (
				<>
					<Container>
						<CoinGeneralInfo
							image={coinData.coinInfo.image}
							name={coinData.coinInfo.name}
							description={coinData.coinInfo.description}
							symbol={coinData.coinInfo.symbol}
							genesisDate={coinData.coinInfo.genesisDate}
							hashingAlgorithm={
								coinData.coinInfo.hashingAlgorithm
							}
							blockTimeInMinutes={
								coinData.coinInfo.blockTimeInMinutes
							}
							links={coinData.coinInfo.links}
						/>
						<CoinMarketData 
						name={coinData.coinInfo.name}
						symbol={coinData.coinInfo.symbol}
						coinMarketData={coinData.coinMarketData}/>
						<SectionBox>
							<Tittle>Community Info</Tittle>
						</SectionBox>
						<SectionBox>
							<Tittle>Development Info</Tittle>
						</SectionBox>
					</Container>
				</>
			)}
		</>
	);
}
