import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import NavBar from "./components/NavBar";
import Landing from "./components/Landing";
import Home from "./components/Home";
import Food from "./components/Food";

function App() {
  return (
    <div className="App">
      <div className="min-h-screen bg-[#0F172A] p-5">
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="home/" element={<Home />} />
          <Route path="food/" element={<Food />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;

{
  /* <Router>
          <NavBar />

          <Route path="/" exact component={Landing} />
          <Route path="/home" exact component={Home} />
          <Route path="/food" exact component={Food} />
          <Route path="/add" exact component={Add} />
          <Route path="/profil" exact component={Profil} />
        </Router> */
}