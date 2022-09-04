import Signup from "./components/authentication/Signup"
import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Login from "./components/authentication/Login";
import logo from "./logo.png";
import { LoggedInRoutes } from "./routes/LoggedInRoutes";
import { Home } from "./components/home/Home";
import { NotLoggedInRoutes } from "./routes/NotLoggedIn";

function App() {
  return (
    <>
      <img className="logo" src={logo} alt="" />
      <Routes>
        <Route element={<LoggedInRoutes />}>
          <Route path="/" element ={<Home />} exact />
        </Route>
        <Route element= {<NotLoggedInRoutes />}>
          <Route path="/login" element={<Login />} exact />
        <Route path="/signup" element={<Signup />} />

          </Route>
      </Routes>
    </>
  );
}

export default App;
