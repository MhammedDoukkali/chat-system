import styled from "styled-components"
import ChatBar from "./ChatBar";
import ChatKeyboard from "./ChatKeyboard";

const ChatWindow = ({socket}) => {

    return (
        <>
            <ChatBar/>
     <Wrapper>
            <div>
                <p>Welcome, <b></b></p>
            </div>
            <ChatBox/>
            <ChatKeyboard/>
        </Wrapper>
        </>
    )
};

export default ChatWindow; 

const ChatBox=styled.div`
text-align: left;
    margin: 0 auto;
    margin-bottom: 25px;
    padding: 10px;
    background: #fff;
    height: 300px;
    width: 530px;
    border: 1px solid #a7a7a7;
    overflow: auto;
    border-radius: 4px;
    border-bottom: 4px solid #a7a7a7;

`;

const Wrapper=styled.div`
    margin: 0 auto;
    padding-bottom: 25px;
    background: #0d2d3c;
    color:white; 
    width: 600px;
    max-width: 100%;
    border: 2px solid #212121;
    border-radius: 4px;
`;
