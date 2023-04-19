import ReactDOM from "react-dom/client";
import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { RandomColor } from "./pages/RandomColor";

function App() {
  return (
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/random-color" element={<RandomColor />} />
    </Routes>
  );
}

export default App;
