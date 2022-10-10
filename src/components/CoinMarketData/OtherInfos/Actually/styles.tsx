import styled from "styled-components";

export const Container = styled.section`
	width: 45%;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: flex-start;
	background-color: #ffc300;
	border-radius: 15px;
	margin-bottom: 2vh;
	padding: 2vh 2vw 2vh 2vw;
`;

export const Info = styled.p`
	font-family: "Encode Sans", sans-serif;
	font-weight: 700;
	margin: 1vh 0vh 1vh 0vh;

	span {
		color: #ffffff;
	}
`;
