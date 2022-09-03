import Signup from "./components/authentication/Signup"
import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Login from "./components/authentication/Login";
import logo from "./logo.png";

function App() {
  return (
    <>
      <img className="logo" src={logo} alt="" />
      <Routes>
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );
}

export default App;
