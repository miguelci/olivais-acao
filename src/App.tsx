import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./components/Home.tsx";

function App() {
  return (
    <BrowserRouter basename="/">
      <Routes>
        <Route path="/" element={<Home />} />
        {/* add other routes */}
      </Routes>
    </BrowserRouter>
  );
}

export default App
