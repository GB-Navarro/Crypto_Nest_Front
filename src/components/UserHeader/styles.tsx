import styled from "styled-components";

export const Header = styled.header`
	width: 100vw;
	position: relative;
	z-index: 2;
	display: flex;
	justify-content: space-between;
	margin-top: 4vw;

	@media (min-width: 850px) {
		margin-top: 2vw;
	}
`;
export const Container = styled.div`
	display: flex;
`;
export const ProfileImageBox = styled.div`
	width: 21vw;
	height: 19vw;
	margin-left: 2vw;

	@media (min-width: 850px) {
		width: 6vw;
		height: 5vw;
	}
`;
export const ProfileImage = styled.img`
	width: 100%;
	height: 100%;
	border-radius: 50%;
`;
export const NameBox = styled.div`
	height: 12vw;
	display: flex;
	justify-content: center;
	align-items: center;

	@media (max-width: 450px) {
		display: none;
	}
	@media (max-width: 850px) {
		margin: 2vw 0vw 0vw 4vw;
	}
	@media (min-width: 850px) {
		width: 10vw;
		height: 6vw;
		margin-left: 1vw;
	}
`;
export const Name = styled.p`
	font-family: "Encode Sans", sans-serif;
	color: #ffffff;
	font-weight: 700;
	font-size: 3vw;

	@media(min-width:450px) and (max-width: 850px){
		padding-top:5px;
	}
	@media (min-width: 850px) {
		font-size: 1vw;
		padding-bottom: 10px;
	}
`;

export const SignOut = styled.div`
	width: 21vw;
	height: 19vw;
	font-size: 4vw;
	display: flex;
	align-items: center;
	font-family: "Encode Sans", sans-serif;
	color: #ffc300;
	font-weight: 900;

	@media (min-width: 450px) and (max-width: 850px) {
		height: 12vw;
		margin: 2vw 0vw 0vw 3vw;
		font-size:3vw;
		padding-top:5px;
	}
	@media (min-width: 850px) {
		width: 10vw;
		height: 6vw;
		font-size: 1vw;
		padding-bottom: 10px;
	}
`;
