import styled from "styled-components";

export const Container = styled.div`
	width: 45%;
	background-color: #ffc300;
	border-radius: 15px;
	display: flex;
	flex-direction: column;
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

export const OtherInfosBox = styled.div`
	display: flex;
	flex-direction: column;
	padding-bottom: 5vh;
	align-items: center;
`;

export const Info = styled.div`
	display: flex;
	flex-direction: column;
	padding-bottom: 5vh;
	align-items: center;
`;

export const Type = styled.p`
	font-family: "Encode Sans", sans-serif;
	font-weight: 700;

	span{
		color: #FFFFFF;
	}
`;
