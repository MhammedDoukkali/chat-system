import { BrowserRouter as Router,  Routes,  Route,} from "react-router-dom";
import ChatMessenger from "./ChatMessenger";

const App = () => {
  return (
    <Router>
        <Routes>
          <Route path="/" element={<ChatMessenger />}/>
        </Routes>
  </Router>
  );
}

export default App;
