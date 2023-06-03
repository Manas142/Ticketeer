import { Button } from "react-bootstrap";


function CustomButton(props){

    function onButtonClick(){
        props.inputField.current.focus();
    }

    return <Button onClick={onButtonClick}>
        Custom Button
    </Button>
}

export default CustomButton;