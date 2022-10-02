import styled from "styled-components";

export default function Header(props: any) {
	return (
		<>
			<Container>
				<Menu>{props.children}</Menu>
			</Container>
		</>
	);
}

const Container = styled.header`
	display: flex;
	justify-content: flex-end;
	font-family: "Encode Sans", sans-serif;
	font-weight: 700;
	font-size: 20px;
	color: #ffffff;
	margin-top: 5%;

	@media (max-width: 450px) {
		justify-content: space-evenly
	}
`;

const Menu = styled.ul`
	list-style-type: none;
	width: 80vw;
	display: flex;
	justify-content: space-evenly;

	@media (max-width: 600px) {
		font-size: 4vw;
	}
	@media (max-width: 450px) {
		width: 100vw;
		font-size: 4vw;
	}
`;
