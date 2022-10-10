import styled from "styled-components";

export const Container = styled.section`
	background-color: #ffc300;
	border-radius: 15px;
	margin-bottom: 2vh;
	padding: 2vh 2vw 2vh 2vw;
	@media(max-width: 850px){
		width: 95%;
	}
`;

export const MainInfo = styled.p`
	font-family: "Encode Sans", sans-serif;
	font-weight: 700;
	padding:4vh 0vh 4vh 0vh;
	border-bottom: 2px solid #001d3d;

	span {
		color: ${props => props.color };
	}
`
export const Info = styled.p`
	font-family: "Encode Sans", sans-serif;
	font-weight: 700;
	margin:2vh 0vh 2vh 0vh;
	span {
		color: ${props => props.color };
	}
`;
