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
	font-weight: 500;
	font-size: 18px;
	color: #ffffff;
	margin: 30px 0px 30px 0px;

	@media (max-width: 850px) {
		justify-content: space-evenly;
	}
`;

const Menu = styled.ul`
	list-style-type: none;
	width: 50vw;
	display: flex;
	justify-content: space-around;

	@media (max-width: 850px) {
		width: 100vw;
	}
	@media (min-width: 450px) and (max-width: 600px) {
		font-size: 3vw;
	}
	@media (max-width: 450px) {
		font-size: 4vw;
	}
`;
