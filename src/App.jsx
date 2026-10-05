import { Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import Home from "./pages/Home";
import PeanutStore from "./pages/PeanutStore";
import AdminPanel from "./pages/AdminPanel";

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/peanut" element={<PeanutStore />} />
        <Route path="/peanut/admin" element={<AdminPanel />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </>
  );
}