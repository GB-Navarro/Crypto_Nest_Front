import { Background, Container } from "./styles";
import { Link } from "react-router-dom";
import { useContext } from "react";

import userContext from "../../context/userContext";
import UserMenu from "../../components/UserMenu/UserMenu";
import UserHeader from "../../components/UserHeader/UserHeader";
import ParticlesBackground from "../../components/Particles/Particles";

export default function User() {

	const { setName, setEmail, setToken }: any = useContext(userContext);

	setName(localStorage.getItem(process.env.REACT_APP_LOCALSTORAGE_NAME_KEY));
	setEmail(
		localStorage.getItem(process.env.REACT_APP_LOCALSTORAGE_EMAIL_KEY)
	);
	setToken(
		localStorage.getItem(process.env.REACT_APP_LOCALSTORAGE_TOKEN_KEY)
	);

	return (
		<>
			<UserHeader/>
			<Background>
				<ParticlesBackground></ParticlesBackground>
			</Background>
			<Container>
				<Link to="/coins">
					<UserMenu> 🪙 Coins Info </UserMenu>
				</Link>
			</Container>
		</>
	);
}
