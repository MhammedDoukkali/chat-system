import styled from "styled-components"

const ChatWindow = () => {


    return (
        <>
     <Wrapper>
            <div id="menu">
                <p class="welcome">Welcome, <b></b></p>
                {/* <p class="logout"><a id="exit" href="#">Exit Chat</a></p> */}
            </div>
 
            <ChatBox id="chatbox"></ChatBox>
 
            <form name="message" action="">
                <input name="usermsg" type="text" id="usermsg" />
                <input name="submitmsg" type="submit" id="submitmsg" value="Send" />
            </form>
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
    background: #eee;
    width: 600px;
    max-width: 100%;
    border: 2px solid #212121;
    border-radius: 4px;
`;
