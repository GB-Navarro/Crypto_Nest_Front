import styled from "styled-components";

export const Background = styled.div`
	position: relative;
	z-index: 1;
`;
export const Container = styled.div`
	height: 100vh;
	position: relative;
	z-index: 2;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;

export const Box = styled.div`
	display: flex;
	margin-bottom: 10vh;

	main {
		margin-right: 5vw;
	}
`;
