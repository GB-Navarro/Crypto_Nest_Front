import { Container, Image, NameBox } from "./styles";

export default function MainInfos(props) {
	const { image, name } = props;

	return (
		<>
			<Container>
				<Image alt="imagem" src={image} />
				<NameBox>
					<p>{name}</p>
				</NameBox>
			</Container>
		</>
	);
}
