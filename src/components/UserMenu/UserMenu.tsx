import { Main, Option } from "./styles";

export default function UserMenu(props) {
	return (
		<>
			<Main>
				<Option>{props.children}</Option>
			</Main>
		</>
	);
}
