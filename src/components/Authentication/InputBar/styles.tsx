import styled from "styled-components";

export const Input = styled.input`
	width: 50%;
	background-color: #ffc300;
	border: 1px solid #ffc300;
	border-radius: 5px;
	margin-top: 2vh;
	font-family: "Encode Sans", sans-serif;
	font-weight: 700;
	color: #ffffff;
	padding-left: 10px;

	@media (max-width: 600px) {
		width: 70vw;
		height: 5vh;
	}

	::placeholder {
		font-family: "Encode Sans", sans-serif;
		font-weight: 700;
		color: #ffffff;
	}
`;
