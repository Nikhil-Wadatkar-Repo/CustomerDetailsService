import logo from "./logo.svg";
import "./App.css";
import CreateUser from "./components/CreateUser";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import EmpContactList from "./components/EmpContactList";
import Demo from "./components/Demo";
import NavBar from "./components/NavBar";
import About from "./components/About";
import Home from "./components/Home";

function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
      <Router>
        <Routes>
          <Route path="/main" element={<CreateUser />} />
          <Route path="/demo" element={<Demo />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact/:empID" element={<EmpContactList />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
