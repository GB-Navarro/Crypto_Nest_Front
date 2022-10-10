import styled from "styled-components";

export const Container = styled.section`
	width: 85%;
	margin-top: 10vh;
	padding: 5vh 0vh 5vh 0vh;
	border-radius: 15px;
	color: rgba(0, 8, 20, 0.95);
	display: flex;
	flex-direction: column;
	align-items: center;
	@media(max-width: 850px){
		width: 100%;
	}
`;
export const TopBox = styled.div`
	width: 100%;
	display: flex;
	justify-content: space-around;
	margin-bottom: 5vh;
	@media(max-width: 850px){
		display:flex;
		flex-direction: column;
		align-items: center;
	}
`;
export const MiddleBox = styled.div`
	margin-bottom: 5vh;
	@media(max-width: 850px){
		display:flex;
		flex-direction: column;
		align-items: center;
	}
`;
export const BottomBox = styled.div`
	width: 100%;
	display: flex;
	justify-content: space-between;
	padding: 0vh 2vw 0vh 2vw;
	@media(max-width: 850px){
		display:flex;
		flex-direction: column;
		align-items: center;
	}
`;
