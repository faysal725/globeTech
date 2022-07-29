import { Routes, Route, Link } from "react-router-dom";
import './App.css';
import Login from "./components/Login/Login";
import Mainpage from "./components/Mainpage/Mainpage";
import Services from "./components/services/Services";

function App() {
  return (
    <Routes>
        <Route path="/" element={<Mainpage />} />
        <Route path="/services" element={<Services />} />
        <Route path="/login" element={<Login />} />
    </Routes>
  );
}

export default App;
