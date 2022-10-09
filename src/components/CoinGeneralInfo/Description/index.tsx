import { Container, Box, SubTittle, TextBox, Text } from "./styles";
export default function Description(props) {
	const { description } = props;

	return (
		<>
			<Container>
				<Box>
					<SubTittle>📜 Description </SubTittle>
				</Box>
				<TextBox>
					<Text>{description}</Text>
				</TextBox>
			</Container>
		</>
	);
}
