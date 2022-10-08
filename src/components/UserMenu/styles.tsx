import styled from "styled-components";

export const Main = styled.main`
	width: 70vw;
	height: 35vh;
	display: flex;
	justify-content: center;
	align-items: center;
	border-radius: 15px;
	background: rgba(0, 53, 102, 0.25);
	border-radius: 16px;
	backdrop-filter: blur(9.5px);
	-webkit-backdrop-filter: blur(9.5px);
    box-shadow: 5px 5px 2px 2px rgba(0, 29, 61, 0.25);
	-webkit-box-shadow: 5px 5px 2px 2px rgba(0, 29, 61, 0.25);
	-moz-box-shadow: 5px 5px 2px 2px rgba(0, 29, 61, 0.25);
	margin-bottom:15vh;

	@media(min-width:450px) and (max-width: 850px){
		width: 65vw;
		height: 45vh;
	}
	@media(min-width:850px){
		width: 55vw;
		height: 55vh;
	}
`;

export const Option = styled.h1`
	font-family: "Encode Sans", sans-serif;
    font-weight: 900;
	font-size: 7vw;
    color: #FFFFFF;
	@media(min-width:850px){
		font-size:3vw;
	}
`
