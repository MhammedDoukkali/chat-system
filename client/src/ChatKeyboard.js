import { useState } from "react";
import styled from "styled-components";

const ChatKeyboard = () => {

    const [state, setState]=useState({message:""}); 

    const handleChange= (ev, key)=> {
        setState({state, [key]: ev.target.value})
    };

    console.log(state)

    return (
        <form name="message" action="">
                <StyledInput 
                onChange={(ev)=> handleChange(ev, "name")}
                value={state.message}
                type="text" 
                className="message"
                />
                <Button>Send</Button>
            </form>
    )
};

export default ChatKeyboard; 
const Button = styled.button`
width:15%;
height:35px;
`;

const StyledInput= styled.input`
width:80%; 
height:30px; 
margin:2px;
`;