import styled from "styled-components";

const ChatBar = () =>{


    return (
        <>
        <Wrapper>
        <p>user 1</p>
        <p>user 2</p>
        <p>user 3</p>
        <p>user 4</p>
        </Wrapper>
        </>
    )
}; 

export default ChatBar;

const Wrapper = styled.div`
height: 100%;
background-color: #0d2d3c;
position:absolute; 
padding: 20px;
border-right: 1px solid #fdfdfd;

p{
    color: white;
}
`; 