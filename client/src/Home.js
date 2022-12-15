import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const Home = () => {

    const navigate = useNavigate();

    return (
        <>        
        
        <h1>Click to enter the chat room</h1>
        <StyledButton onClick={(ev)=> navigate('/chatroom')}>
        chatroom
        </StyledButton>
        </>

    )
}; 

export default Home; 


const StyledButton = styled.button`
background-color: black;
  font-size: 32px;
  color: white;

  &:hover {
      background-color: grey;
  }
`; 


  