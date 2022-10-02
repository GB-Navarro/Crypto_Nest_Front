import { Button } from "./styles";

export default function SendButton(props){
    return(
        <>
            <Button> {props.children} </Button>
        </>
    )
}