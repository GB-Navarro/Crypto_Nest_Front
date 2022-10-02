import styled from "styled-components";

export const Button = styled.button`
    width: 50%;
	height: 7vh;
	margin-top: 10vh;
	background-color: #ffd60a;
	border: 1px solid #ffd60a;
	border-radius: 5px;
	font-family: "Encode Sans", sans-serif;
	font-weight: 700;
	color: #ffffff;
	padding-left: 10px;
	box-shadow: 3px 3px 1px 0px rgba(255, 214, 10, 0.75);
	-webkit-box-shadow: 3px 3px 1px 0px rgba(255, 214, 10, 0.75);
	-moz-box-shadow: 3px 3px 1px 0px rgba(255, 214, 10, 0.75);

    @media (max-width: 600px) {
		width: 70vw;
		height: 5vh;
	}
`