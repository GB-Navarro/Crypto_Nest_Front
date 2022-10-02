import styled from "styled-components";
import Header from "../../components/Header/Header";
import MenuOption from "../../components/Header/MenuOptions";
import ParticlesBackground from "../../components/Particles/Particles";

export default function Home() {
	
	return (
		<>
			<Container>
				<Box>
					<Header>
						<MenuOption>Sign In</MenuOption>
						<MenuOption>About Us</MenuOption>
					</Header>
				</Box>
				<Background>
					<ParticlesBackground></ParticlesBackground>
				</Background>
				<Box>
					<Main>
						<Tittle>
							Mussum Ipsum, cacilds vidis litro abertis.
						</Tittle>
						<Text>
							Sed non consequat odio.Si u mundo tá muito paradis?
							Toma um mé que o mundo vai girarzis!Aenean aliquam
							molestie leo, vitae iaculis nisl.Praesent vel
							viverra nisi. Mauris aliquet nunc non turpis
							scelerisque, eget.
						</Text>
						<Button type="button">Sign Up</Button>
					</Main>
				</Box>
			</Container>
		</>
	);
}

const Container = styled.div`
	position: relative;
	font-family: "Encode Sans", sans-serif;
	color: #ffffff;
`;
const Background = styled.div`
	position: relative;
	z-index: 1;
`;
const Box = styled.div`
	position: relative;
	z-index: 2;
`;
const Main = styled.main`
	width: 60vw;
	margin: 10vh 0vh 0vh 5vw;
`;
const Tittle = styled.h1`
	font-weight: 900;
	font-size: 70px;
`;
const Text = styled.p`
	margin-top: 3vh;
	font-size: 22px;
	font-weight: 500;
`;
const Button = styled.button`
	width: 15vw;
	height: 7vh;
	margin-top: 10vh;
	background-color: #ffd60a;
	border: 1px solid #ffd60a;
	border-radius: 5px;
	font-weight: 700;
	font-size: 20px;
	color: #ffffff;
	box-shadow: 3px 3px 1px 0px rgba(255, 214, 10, 0.75);
	-webkit-box-shadow: 3px 3px 1px 0px rgba(255, 214, 10, 0.75);
	-moz-box-shadow: 3px 3px 1px 0px rgba(255, 214, 10, 0.75);
`;
