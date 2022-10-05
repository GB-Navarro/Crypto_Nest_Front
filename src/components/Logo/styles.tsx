import styled from "styled-components";

export const Container = styled.section`
	display: flex;
`;
export const IconBox = styled.div`
	span {
		color: rgb(0, 53, 102);
		font-size: 12vw;
	}

	@media (min-width: 600px) {
		span {
			font-size: 8vw;
		}
	}
`;
export const TittleBox = styled.div`
	display: flex;
	align-items: center;
	margin-left: 1vw;
`;
export const Tittle = styled.h1`
	font-weight: 900;
	color: #ffffff;
	font-size: 6vw;

	@media (min-width: 600px) {
		font-size: 5vw;
	}
	@media (max-width: 450px) {
		font-size: 7vw;
	}
`;
