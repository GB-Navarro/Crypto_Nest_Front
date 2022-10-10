import { Container, Box, Info } from "./styles";

export default function Supply(props) {
	const { symbol, totalSupply, circulatingSupply } = props;

	return (
		<>
			<Container>
				<Box>
					<Info>
						Total Supply: <span>{totalSupply}{" "}{symbol}</span>
					</Info>
					<Info>
						Circulating Supply: <span>{circulatingSupply}{" "}{symbol}</span>
					</Info>
				</Box>
			</Container>
		</>
	);
}
