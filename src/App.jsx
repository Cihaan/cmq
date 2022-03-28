import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import AddRestaurant from "./components/AddRestaurant";
import Landing from "./components/Landing";
import Home from "./components/Home";
import Login from "./components/Login"

export default function App() {
  return (
    <div className="App">
      <div className="min-h-screen bg-[#0F172A] p-5">
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/landing" element={<Landing />} />
          <Route path="/login" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/add" element={<AddRestaurant/>}></Route>
          <Route path="/*" element={<Landing />} />
        </Routes>
      </div>
    </div>
  );
}