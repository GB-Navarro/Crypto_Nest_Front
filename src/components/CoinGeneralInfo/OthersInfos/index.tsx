import {
	Container,
	SubTittle,
	SubTittleBox,
	OtherInfosBox,
	Info,
	Type,
} from "./styles";

export default function OthersInfos(props) {
	const { symbol, genesisDate, hashingAlgorithm, blockTimeInMinutes } = props;

	return (
		<>
			<Container>
				<SubTittleBox>
					<SubTittle> Other infos </SubTittle>
				</SubTittleBox>
				<OtherInfosBox>
					<Info>
						<Type>
							{" "}
							🪙 Coin Symbol: <span>{symbol}</span>{" "}
						</Type>
					</Info>
					<Info>
						<Type>
							{" "}
							⏱ Block Time in Minutes:{" "}
							<span>{blockTimeInMinutes}</span>
						</Type>
					</Info>
					<Info>
						<Type>
							{" "}
							📅 Genesis Date: <span>{genesisDate} </span>
						</Type>
					</Info>
					<Info>
						<Type>
							{" "}
							🔐 Hashing Algorithm:{" "}
							<span>{hashingAlgorithm}</span>{" "}
						</Type>
					</Info>
				</OtherInfosBox>
			</Container>
		</>
	);
}
