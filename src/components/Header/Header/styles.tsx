import styled from "styled-components";

export const Container = styled.header`
	display: flex;
	justify-content: flex-end;
	font-family: "Encode Sans", sans-serif;
	font-weight: 500;
	font-size: 18px;
	color: #ffffff;
	margin: 30px 0px 30px 0px;
`;

export const Menu = styled.ul`
	width: 25vw;
	list-style-type: none;
	display: flex;
	justify-content: space-around;
	padding-right: 6vw;
	@media (min-width: 450px) and (max-width: 600px) {
		font-size: 3vw;
	}
	@media (max-width: 450px) {
		font-size: 4vw;
        width: 50vw;
	}
`;
