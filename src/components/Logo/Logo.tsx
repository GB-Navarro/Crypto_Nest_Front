import { IconBox, TittleBox, Tittle } from "./styles";

import IonIcon from "@reacticons/ionicons";

export default function Logo() {
	return (
		<>
			<IconBox>
				<IonIcon name="logo-bitcoin"></IonIcon>
			</IconBox>
			<TittleBox>
				<Tittle> Crypto Nest </Tittle>
			</TittleBox>
		</>
	);
}
