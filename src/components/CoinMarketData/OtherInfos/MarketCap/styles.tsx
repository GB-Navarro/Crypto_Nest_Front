import styled from "styled-components";

export const Container = styled.section`
	width: 50%;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;
	background-color: #ffc300;
	border-radius: 15px;
	margin-bottom: 2vh;
	padding: 2vh 2vw 2vh 2vw;
	@media(max-width: 850px){
		width: 95%;
	}
`;

export const Info = styled.p`
	font-family: "Encode Sans", sans-serif;
	font-weight: 700;
	
	span {
		color: ${props => props.color};
	}
`;
