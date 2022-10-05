import { Container, Menu } from "./styles";
export default function Header(props: any) {
	return (
		<>
			<Container>
				<Menu>{props.children}</Menu>
			</Container>
		</>
	);
}