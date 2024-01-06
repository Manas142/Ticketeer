import { Button } from "react-bootstrap";


function CustomButton(props){

    function onButtonClick(){

        console.log(props.div.current);
    }

    return <Button onClick={onButtonClick}>
        Custom Button
    </Button>
}

export default CustomButton;