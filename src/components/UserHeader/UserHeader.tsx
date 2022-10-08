import {
	Header,
	Container,
	ProfileImageBox,
	ProfileImage,
	NameBox,
	Name,
	SignOut,
} from "./styles";
import { Link } from "react-router-dom";

export default function UserHeader() {
	return (
		<>
			<Header>
				<Container>
					<Link to="/user">
						<ProfileImageBox>
							<ProfileImage src="https://www.bitmag.com.br/wp-content/uploads/2022/03/monkey-7009603_1920-1536x864.jpg" />
						</ProfileImageBox>
					</Link>
					<NameBox>
						<Name> Nome do usuário </Name>
					</NameBox>
				</Container>
				<SignOut> Sign Out </SignOut>
			</Header>
		</>
	);
}
