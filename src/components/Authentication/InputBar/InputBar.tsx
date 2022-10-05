import { Input } from "./styles";

export default function InputBar(props) {
	return (
		<>
			<Input type={props.type} id={props.id} placeholder={props.placeholder} maxLength={props.maxLength} onChange={props.onChange} required></Input>
		</>
	);
}
