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
import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";

import userHeaderUtils from "./utils/userHeaderUtils";
import userContext from "../../context/userContext";
export default function UserHeader(props) {

	const { name, token }:any = useContext(userContext);

	const navigate = useNavigate();

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
					<SignOut onClick={async () => {
						await userHeaderUtils.logout(token, navigate)
					}}> Sign Out </SignOut>
				</Header>
			</Container>
		</>
	);
}
