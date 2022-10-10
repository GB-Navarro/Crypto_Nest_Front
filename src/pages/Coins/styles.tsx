import styled from "styled-components";

export const Container = styled.div`
	margin-top: 10vh;
	display: flex;
	justify-content: center;
	align-items: center;
`;
export const Box = styled.div`
	width: 85vw;
	height: 100vh;
	position: relative;
	z-index: 2;
	display: flex;
	flex-direction: column;
	margin-bottom: 15vh;
	overflow: scroll;
	border-radius: 15px;
	background: rgba(0, 53, 102, 0.25);
	backdrop-filter: blur(9.5px);
	-webkit-backdrop-filter: blur(9.5px);
	box-shadow: 5px 5px 2px 2px rgba(0, 29, 61, 0.25);
	-webkit-box-shadow: 5px 5px 2px 2px rgba(0, 29, 61, 0.25);
	-moz-box-shadow: 5px 5px 2px 2px rgba(0, 29, 61, 0.25);


	::-webkit-scrollbar {
		width: 1vw;
		height: 1vw;
	}
	::-webkit-scrollbar-button {
		width: 1.5px;
		height: 0px;
	}
	::-webkit-scrollbar-thumb {
		background: #ffc300;
		border-radius: 16px;
	}
	::-webkit-scrollbar-track {
		background: rgba(0, 29, 61, 0.25);
		border-radius: 16px;
	}
	::-webkit-scrollbar-corner {
		background: transparent;
	}
`;
export const Background = styled.div`
	position: relative;
	z-index: 1;
`;
export const LoadingBox = styled.div`
	width: 50vw;
	height: 50vh;
	display: flex;
	justify-content: center;
	align-items: center;
`;
