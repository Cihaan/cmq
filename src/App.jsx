import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import NavBar from "./components/NavBar";
import Landing from "./components/Landing";
import Home from "./components/Home";
import Food from "./components/Food";

export default function App() {
  return (
    <div className="App">
      <div className="min-h-screen bg-[#0F172A] p-5">
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/landing" element={<Landing />} />
          <Route path="home/" element={<Home />} />
          <Route path="food/" element={<Food />} />
          <Route path="/*" element={<Landing />} />
        </Routes>
      </div>
    </div>
  );
}