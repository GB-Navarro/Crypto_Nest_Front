import styled from "styled-components";

export const CoinBox = styled.section`
	width: 85vw;
	height: 15vh;
	display: flex;
	justify-content: space-between;
	align-items: center;
	border-bottom: 5px solid rgba(0,8,20,0.95);
	padding-bottom: 5vh;
	margin-top:5vh;
	color: #FFFFFF;
`;
export const Aside = styled.aside`
	width: 40vw;
	margin: 0vw 5vw 0vw 2vw;
	display:flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`

export const Id = styled.p`
	display:none;
`
export const CoinInfo = styled.article`
	width: 20vw;
	margin-right: 3vw;
`;

export const Description = styled.p`
	margin-bottom: 10px;
	font-family: "Encode Sans", sans-serif;
	font-weight: 600;
	color: #ffffff;
`;

export const Info = styled.p`
	font-family: "Encode Sans", sans-serif;
	font-weight: 300;
	color: ${props => props.color};
`;

export const Image = styled.img`
	width: 50px;
	height: 50px;
`;

export const ArrowUpBox = styled.span`

`
export const ArrowDownBox = styled.span`
	
`