import { BrowserRouter as Router,  Routes,  Route,} from "react-router-dom";
import ChatMessenger from "./ChatMessenger";
// import io from 'socket.io-client';

// const socket = io.connect('http://localhost:3000');

const App = () => {

  
  return (
    <Router>
        <Routes>
          <Route path="/" element={<ChatMessenger  />}/>
        </Routes>
  </Router>
  )
};

export default App;
