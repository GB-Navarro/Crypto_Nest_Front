import { Container, IconBox, TittleBox, Tittle } from "./styles";

import IonIcon from "@reacticons/ionicons";

export default function Logo() {
	return (
		<>
			<Container>
				<IconBox>
					<IonIcon name="logo-bitcoin"></IonIcon>
				</IconBox>
				<TittleBox>
					<Tittle> Crypto Nest </Tittle>
				</TittleBox>
			</Container>
		</>
	);
}
