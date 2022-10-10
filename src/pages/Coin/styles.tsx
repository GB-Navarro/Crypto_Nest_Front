import styled from "styled-components";

export const Container = styled.main`
	display: flex;
	flex-direction: column;
	align-items: center;
	margin-top: 20vh;
	position: relative;
	z-index: 2;
`;
export const Background = styled.div`
	position: relative;
	z-index: 1;
`;
export const SectionBox = styled.section`
	width: 85vw;
	background-color: rgba(0, 53, 102, 0.25);
	display: flex;
	flex-direction: column;
	align-items: center;
	border-radius: 15px;
	margin-bottom: 15vh;
	padding: 5vh 0vh 5vh 0vh;
	color: rgba(0, 8, 20, 0.95);
`;
export const Tittle = styled.h1`
	font-family: "Encode Sans", sans-serif;
	font-weight: 900;
	color: #ffc300;
	padding-bottom: 15vh;
`;

export const LoadingContainer = styled.div`
	margin-top: 10vh;
	display: flex;
	justify-content: center;
	align-items: center;
	position: relative;
	z-index: 2;
`;
export const LoadingBox = styled.div`
	width: 50vw;
	height: 50vh;
	display: flex;
	justify-content: center;
	align-items: center;
`;
