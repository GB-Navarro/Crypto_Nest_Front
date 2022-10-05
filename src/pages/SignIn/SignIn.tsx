import { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Main, LogoBox, Form, IconBox, Background, Box } from "./styles";

import IonIcon from "@reacticons/ionicons";
import Logo from "../../components/Logo/Logo";
import signInUtils from "./utils/signInUtils";
import Header from "../../components/Header/Header";
import MenuOption from "../../components/Header/MenuOptions";
import ParticlesBackground from "../../components/Particles/Particles";
import InputBar from "../../components/Authentication/InputBar/InputBar";
import SendButton from "../../components/Authentication/SendButton/SendButton";

export default function SignIn() {
	const navigate = useNavigate();

	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	return (
		<>
			<Box>
				<Header>
					<Link to="/">
						<MenuOption> Home </MenuOption>
					</Link>
					<Link to="/sign-up">
						<MenuOption> Sign Up </MenuOption>
					</Link>
				</Header>
			</Box>
			<Background>
				<ParticlesBackground></ParticlesBackground>
			</Background>
			<Box>
				<Main>
					<LogoBox>
						<Logo></Logo>
					</LogoBox>
					<Form
						onSubmit={async (event) => {
							const data = signInUtils.formatData(
								event,
								email,
								password
							);
							await signInUtils.login(data, navigate);
						}}
					>
						<InputBar
							placeholder="E-mail"
							type="email"
							maxLength={40}
							value={email}
							onChange={(event) => setEmail(event.target.value)}
						/>
						<InputBar
							placeholder="Password"
							type="password"
							value={password}
							onChange={(event) =>
								setPassword(event.target.value)
							}
						/>
						<SendButton type="submit"> Login </SendButton>
					</Form>
					<IconBox>
						<IonIcon name="logo-google"></IonIcon>
						<IonIcon name="logo-github"></IonIcon>
					</IconBox>
				</Main>
			</Box>
		</>
	);
}
