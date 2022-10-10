import styled from "styled-components";

export const Container = styled.div`
	width: 45%;
	background-color: #ffc300;
	border-radius: 15px;
	display: flex;
	flex-direction: column;
	margin-left: 10%;

	@media(max-width: 450px){
		width: 90%;
		margin-left: 0%;
	}
`;
export const SubTittleBox = styled.div`
	display: flex;
	justify-content: center;
	margin-bottom: 5vh;
`;
export const SubTittle = styled.h2`
	font-family: "Encode Sans", sans-serif;
	font-weight: 800;
	padding-top: 5vh;
`;

export const LinksBox = styled.div`
	display: flex;
	flex-direction: column;
	padding-bottom: 5vh;
	align-items: center;
`;

export const LinkType = styled.div`
	width: 90%;
	display: flex;
	flex-direction: column;
	align-items: center;
	margin-bottom: 3vh;
`;

export const Type = styled.h3`
	font-family: "Encode Sans", sans-serif;

	margin-bottom: 1vh;

	a {
		font-weight: 400;
		color: rgba(0, 8, 20, 0.5);
	}
`;
