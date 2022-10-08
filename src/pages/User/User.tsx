import { Background, Container, Box } from "./styles";
import { Link } from "react-router-dom";

import UserMenu from "../../components/UserMenu/UserMenu";
import UserHeader from "../../components/UserHeader/UserHeader";
import ParticlesBackground from "../../components/Particles/Particles";

export default function User() {
	return (
		<>
			<UserHeader />
			{/*<Background>
				<ParticlesBackground></ParticlesBackground>
	</Background>*/}
			<Container>
				<Link to="/coins">
					<UserMenu> 🪙 Coins Info </UserMenu>
				</Link>
			</Container>
		</>
	);
}
