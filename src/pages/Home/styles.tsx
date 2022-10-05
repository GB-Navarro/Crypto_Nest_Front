import styled from "styled-components";

export const Container = styled.div`
	position: relative;
	font-family: "Encode Sans", sans-serif;
	color: #ffffff;
`;
export const Background = styled.div`
	position: relative;
	z-index: 1;
`;
export const Box = styled.div`
	position: relative;
	z-index: 2;
`;
export const Main = styled.main`
	margin: 5vh 0vh 0vh 5vw;
	
	@media (min-width: 850px) {
		width: 50vw;
	}
	@media(min-width:450px) and (max-width:850px){
		width: 80vw;
	}
	@media(max-width:450px){
		margin: 25vw 0vh 0vh 5vw;
	}
`;
export const Tittle = styled.h1`
	font-size: 11vw;
	font-weight: 900;

	@media (min-width: 850px) {
		font-size: 5vw;
	}
	@media(min-width:450px) and (max-width:850px){
		font-size: 8vw;
	}
`;
export const Text = styled.p`
	margin-top: 3vh;
	font-size: 5vw;
	font-weight: 500;

	@media(min-width:450px) and (max-width: 850px){
		font-size:3vw;
	}
	@media(min-width: 850px){
		font-size:2vw;
	}
`;
export const Button = styled.button`
	width: 35vw;
	height: 7vh;
	margin-top: 10vh;
	background-color: #ffd60a;
	border: 1px solid #ffd60a;
	border-radius: 5px;
	font-weight: 700;
	font-size: 5vw;
	color: #ffffff;
	box-shadow: 3px 3px 1px 0px rgba(255, 214, 10, 0.75);
	-webkit-box-shadow: 3px 3px 1px 0px rgba(255, 214, 10, 0.75);
	-moz-box-shadow: 3px 3px 1px 0px rgba(255, 214, 10, 0.75);

	@media (min-width: 850px) {
		width: 15vw;
		font-size:2vw;
		margin-top:3vw;
	}
	@media (min-width: 450px) and (max-width: 850px) {
		width: 25vw;
		font-size: 4vw;
		margin-top:7vw;
	}
`;
