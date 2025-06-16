import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import Chat from "./components/Chat";
import Dashboard from "./components/Dashboard";
import Events from "./components/Events";
import Home from "./components/Home";
import Login from "./components/Login";
import SignUp from "./components/SignUp";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/home" element={<Home />}></Route>
          <Route path="/signup" element={<SignUp />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/localconnect" element={<Dashboard />}></Route>
          <Route path="/chat" element={<Chat />}></Route>
          <Route path="/events" element={<Events />}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
