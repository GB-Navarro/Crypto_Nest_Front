import { Container, Info } from "./styles";

export default function Actually(props) {
	const { currentPrice, high24h, low24h } = props;
	return (
		<>
			<Container>
				<Info>
					Current price: <span>${currentPrice}</span>
				</Info>
				<Info>
					Highest price in the last 24 hours: <span>${high24h}</span>
				</Info>
				<Info>
					Lowest price in the last 24 hours: <span>${low24h}</span>
				</Info>
			</Container>
		</>
	);
}
