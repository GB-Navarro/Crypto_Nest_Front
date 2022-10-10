import {
	Container,
	Header,
	UserInfo,
	ProfileImageBox,
	ProfileImage,
	NameBox,
	Name,
	SignOut
} from "./styles";
import { Link } from "react-router-dom";
import { useContext } from "react";

import userContext from "../../context/userContext";
export default function UserHeader(props) {

	const { name }:any = useContext(userContext);

	return (
		<>
			<Container>
				<Header>
					<UserInfo>
						<Link to="/user">
							<ProfileImageBox>
								<ProfileImage src="https://www.bitmag.com.br/wp-content/uploads/2022/03/monkey-7009603_1920-1536x864.jpg" />
							</ProfileImageBox>
						</Link>
						<NameBox>
							<Name> {name} </Name>
						</NameBox>
					</UserInfo>
					<SignOut> Sign Out </SignOut>
				</Header>
			</Container>
		</>
	);
}
