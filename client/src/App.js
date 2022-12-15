import { BrowserRouter as Router,  Routes,  Route,} from "react-router-dom";
import ChatWindow from "./ChatWindow";
import Home from "./Home";


// import io from 'socket.io-client';

// const socket = io.connect('http://localhost:3000');

const App = () => {

  
  return (
    <Router>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/chatroom" element={<ChatWindow />}/>
        </Routes>
  </Router>
  )
};

export default App;
