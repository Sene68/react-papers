import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { RandomColor } from "./pages/RandomColor";
import { ColorSlider } from "./pages/ColorSlider";
import { NumberGuessing } from "./pages/NumberGuessing";
import { DigitalClock } from "./pages/DigitalClock";

function App() {
  return (
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/random-color" element={<RandomColor />} />
        <Route path="/color-slider" element={<ColorSlider />} />
        <Route path="/number-guessing" element={<NumberGuessing />} />
        <Route path="/digital-clock" element={<DigitalClock />} />
    </Routes>
  );
}

export default App;
