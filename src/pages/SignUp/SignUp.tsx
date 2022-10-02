import { Container, LogoBox, Form, IconBox } from "./styles";

import IonIcon from "@reacticons/ionicons";
import Logo from "../../components/Logo/Logo";
import Header from "../../components/Header/Header";
import MenuOption from "../../components/Header/MenuOptions";
import InputBar from "../../components/Authentication/InputBar/InputBar";
import SendButton from "../../components/Authentication/SendButton/SendButton";

export default function SignUp() {
	return (
		<>
			<Header>
				<MenuOption> Home </MenuOption>
				<MenuOption> Last News </MenuOption>
				<MenuOption> Educational </MenuOption>
				<MenuOption> About Us </MenuOption>
			</Header>
			<Container>
				<LogoBox>
					<Logo></Logo>
				</LogoBox>
				<Form>
					<InputBar placeholder="Name" type="text" />
					<InputBar placeholder="E-mail" type="email" />
					<InputBar placeholder="Password" type="password" />
					<InputBar placeholder="Confirm Password" type="password" />
					<SendButton></SendButton>
				</Form>
				<IconBox>
					<IonIcon name="logo-google"></IonIcon>
					<IonIcon name="logo-github"></IonIcon>
				</IconBox>
			</Container>
		</>
	);
}
