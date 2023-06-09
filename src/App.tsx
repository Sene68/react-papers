import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { RandomColor } from "./pages/RandomColor";
import { ColorSlider } from "./pages/ColorSlider";
import { NumberGuessing } from "./pages/NumberGuessing";
import { DigitalClock } from "./pages/DigitalClock";
import { CardWithDynamicTheme } from "./pages/CardWithDynamicTheme";
import { RockPaperScissor } from "./pages/RockPaperScissor";
import { RandomPasswordGenerator } from "./pages/RandomPasswordGenerator";
import { RollTheDice } from "./pages/RollTheDice";
import { ResponsiveImageSlider } from "./pages/ResponsiveImageSlider";

function App() {
  return (
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/random-color" element={<RandomColor />} />
        <Route path="/color-slider" element={<ColorSlider />} />
        <Route path="/number-guessing" element={<NumberGuessing />} />
        <Route path="/digital-clock" element={<DigitalClock />} />
        <Route path="/card-theme" element={<CardWithDynamicTheme />} />
        <Route path="/rock-paper-scissor" element={<RockPaperScissor />} />
        <Route path="/random-password-generator" element={<RandomPasswordGenerator />} />
        <Route path="/roll-the-dice" element={<RollTheDice />} />
        <Route path="/responsive-image-slider" element={<ResponsiveImageSlider />} />
    </Routes>
  );
}

export default App;
