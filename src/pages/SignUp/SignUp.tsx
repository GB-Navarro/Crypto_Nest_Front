import { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Container, LogoBox, Form, IconBox } from "./styles";

import IonIcon from "@reacticons/ionicons";
import Logo from "../../components/Logo/Logo";
import Header from "../../components/Header/Header";
import MenuOption from "../../components/Header/MenuOptions";
import InputBar from "../../components/Authentication/InputBar/InputBar";
import SendButton from "../../components/Authentication/SendButton/SendButton";
import signUpUtils from "./utils/signUpUtils";

export default function SignUp() {
	const navigate = useNavigate();

	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [confirmedPassword, setConfirmedPassword] = useState("");

	return (
		<>
			<Header>
				<Link to="/">
					<MenuOption> Home </MenuOption>
				</Link>
				<MenuOption> Last News </MenuOption>
				<MenuOption> Educational </MenuOption>
				<MenuOption> About Us </MenuOption>
			</Header>
			<Container>
				<LogoBox>
					<Logo></Logo>
				</LogoBox>
				<Form
					onSubmit={async (event) => {
						const data = signUpUtils.formatData(
							event,
							name,
							email,
							password,
							confirmedPassword
						);
						await signUpUtils.register(data, navigate);
					}}
				>
					<InputBar
						placeholder="Name"
						type="text"
						maxLength={15}
						value={name}
						onChange={(event) => setName(event.target.value)}
					/>
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
						onChange={(event) => setPassword(event.target.value)}
					/>
					<InputBar
						placeholder="Confirm Password"
						type="password"
						value={confirmedPassword}
						onChange={(event) =>
							setConfirmedPassword(event.target.value)
						}
					/>
					<SendButton type="submit"> Register </SendButton>
				</Form>
				<IconBox>
					<IonIcon name="logo-google"></IonIcon>
					<IonIcon name="logo-github"></IonIcon>
				</IconBox>
			</Container>
		</>
	);
}
