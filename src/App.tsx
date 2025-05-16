import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./pages/Home.tsx";
import QuemSomos from "./pages/QuemSomos.tsx";
import OQueDefendemos from "./pages/OQueDefendemos.tsx";

function App() {
  return (
    <BrowserRouter basename="/">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/quem-somos" element={<QuemSomos />} />
        <Route path="/o-que-defendemos" element={<OQueDefendemos />} />
        {/* add other routes */}
      </Routes>
    </BrowserRouter>
  );
}

export default App
