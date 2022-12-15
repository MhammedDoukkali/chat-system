import { BrowserRouter as Router,  Routes,  Route,} from "react-router-dom";
import ChatWindow from "./ChatWindow";
import Home from "./Home";
import socketIO from "socket.io-client";

const socket = socket.IO.connect('http://localhost:3000');

const App = () => {

  
  return (
    <Router>
      <>
        <Routes>
          <Route path="/" element={<Home socket={socket}/>}/>
          <Route path="/chatroom" element={<ChatWindow socket={socket}/>}/>
        </Routes>
        </>
  </Router>
  )
};

export default App;
