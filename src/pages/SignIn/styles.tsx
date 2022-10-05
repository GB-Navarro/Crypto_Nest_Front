import styled from "styled-components";

export const Main = styled.main`
	height: 90vh;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	font-family: "Encode Sans", sans-serif;
`;
export const LogoBox = styled.div`
	display: flex;
`;
export const Form = styled.form`
	display: flex;
	flex-direction: column;
	align-items: center;
`;
export const IconBox = styled.div`
	width: 40vw;
	display: flex;
	justify-content: center;
	margin-top: 3vh;
	color: #ffffff;
	font-size: 35px;

	span {
		margin: 0px 5px 0px 5px;
	}
`;
export const Background = styled.div`
	position: relative;
	z-index: 1;
`;
export const Box = styled.div`
	position: relative;
	z-index: 2;
`;