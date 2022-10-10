import { Container, TopBox, BottomBox, Info } from "./styles";

import utilityFunctions from "../../utils/utilityFunctions";
export default function AthAndAtl(props) {
	const {
		atl,
		atlChangePercentage,
		atlDate,
		ath,
		athChangePercentage,
		athDate,
	} = props;
	return (
		<>
			<Container>
				<TopBox>
					<Info>
						ATH Value: <span>${ath}</span>
					</Info>
					<Info color={athChangePercentage > 0 ? "#008000" : "#F40000"}>
						ATH Change Percentage: {" "}
						<span>{athChangePercentage.toFixed(2)}%</span>
					</Info>
					<Info>
						ATH Date:{" "}
						<span>{utilityFunctions.formatDate(athDate)}</span>
					</Info>
				</TopBox>
				<BottomBox>
					<Info>
						ATL Value: <span>${atl}</span>
					</Info>
					<Info color={atlChangePercentage > 0 ? "#008000" : "#F40000"}>
						ATL Change Percentage: {" "}
						<span>{atlChangePercentage.toFixed(2)}%</span>
					</Info>
					<Info>
						ATL Date:{" "}
						<span>{utilityFunctions.formatDate(atlDate)}</span>
					</Info>
				</BottomBox>
			</Container>
		</>
	);
}
