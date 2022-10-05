import { Link } from "react-router-dom";
import { Container, Box, Background, Main, Tittle, Text, Button } from "./styles";

import Header from "../../components/Header/Header";
import MenuOption from "../../components/Header/MenuOptions";
import ParticlesBackground from "../../components/Particles/Particles";

export default function Home() {
	return (
		<>
			<Container>
				<Box>
					<Header>
						<Link to="/sign-in">
							<MenuOption>Sign In</MenuOption>
						</Link>
					</Header>
				</Box>
				<Background>
					<ParticlesBackground></ParticlesBackground>
				</Background>
				<Box>
					<Main>
						<Tittle>
							<p>Welcome,</p>
							<p>You are in the Crypto Nest 🚀</p>
						</Tittle>
						<Text>
							Here you can obtain information and learn about the
							crypto universe, in addition to being able to
							create discussions on the most diverse topics of
							this universe. Also, here you can get information
							about coins, perform portofilio simulations and more.
						</Text>
						<Link to="/sign-up">
							<Button type="button">Sign Up</Button>
						</Link>
					</Main>
				</Box>
			</Container>
		</>
	);
}

