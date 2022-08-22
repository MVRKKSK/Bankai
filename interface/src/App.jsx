import Signup from "./components/authentication/Signup"
import './App.css';
import {BrowserRouter , Route , Routes} from "react-router-dom"
import Login from "./components/authentication/Login";

function App() {
  return (
    
    <BrowserRouter>
      <Routes>
      <Route path ="/signup" element = {<Signup />}  />
      <Route path ="/login" element = {<Login />}  />
      </Routes>
    </BrowserRouter>
    
  );
}

export default App;
