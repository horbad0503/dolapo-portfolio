import { Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import Home from "./pages/Home";
import PeanutStore from "./pages/PeanutStore";

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/peanut" element={<PeanutStore />} />
        {/* Fallback */}
        <Route path="*" element={<Home />} />
      </Routes>
    </>
  );
}