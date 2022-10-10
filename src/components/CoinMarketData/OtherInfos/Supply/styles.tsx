import styled from "styled-components";

export const Container = styled.section`
	width: 45%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	background-color: #ffc300;
	border-radius: 15px;
	margin-bottom: 2vh;
	padding: 2vh 2vw 2vh 2vw;
	@media(max-width: 850px){
		width: 95%;
	}
`;

export const Box = styled.div`

`

export const Info = styled.p`
	font-family: "Encode Sans", sans-serif;
	font-weight: 700;
	margin-bottom:2vh;

	span {
		color: #ffffff;
	}
`;
