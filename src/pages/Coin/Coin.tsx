import {
	Container,
	SectionBox,
	Tittle,
	LoadingContainer,
	LoadingBox,
} from "./styles";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

import axios from "axios";
import Loading from "../../components/Loading/Loading";
import UserHeader from "../../components/UserHeader/UserHeader";
import CoinGeneralInfo from "../../components/CoinGeneralInfo/CoinGeneralInfo";
import CoinMarketData from "../../components/CoinMarketData/CoinMarketData";

export default function Coin() {
	const [coinData, setCoinData] = useState(null);

	const { id } = useParams();

	const url = `https://crypto-nest-api.herokuapp.com/coins/get/${id}`;

	const config = {
		headers: {
			Authorization:
				"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsInVzZXJFbWFpbCI6InRlc3RlMUBnbWFpbC5jb20iLCJpYXQiOjE2NjUzNTk0NjksImV4cCI6MTY2NTM2MzA2OX0.CzzcGGh-YV3OYTh4BK1fBSqyiasr1KkxIrshE-y6_N0",
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
