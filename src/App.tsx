import ReactDOM from "react-dom/client";
import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { RandomColor } from "./pages/RandomColor";
import { ColorSlider } from "./pages/ColorSlider";

function App() {
  return (
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/random-color" element={<RandomColor />} />
        <Route path="/color-slider" element={<ColorSlider />} />
    </Routes>
  );
}

export default App;
