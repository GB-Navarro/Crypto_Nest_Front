import styled from "styled-components";

export const Main = styled.span`
	
`
export const LineChartsContainer = styled.div`
	width: 100%;
	display: flex;
	justify-content: space-around;
	@media(max-width: 850px){
		display:none;
	}
`;
export const LineChartBox = styled.div`
	width: 45%;
`;
export const PieChartBox = styled.div`
	width: 35%;
	display: flex;
	flex-direction: column;
	align-items: center;
	margin-top: 10vh;
	@media(max-width: 850px){
		display:none;
	}
`;
