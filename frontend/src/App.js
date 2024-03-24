import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./views/Home";
import Play from "./views/Play";

function App() {
  return (
    <>
    <Navbar />
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/play" element={<Play />} />
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
