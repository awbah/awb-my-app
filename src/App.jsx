import { BrowserRouter as Router, Routes, Route, NavLink } from "react-router-dom";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Contact from "./pages/Contact.jsx";

export default function App() {
  return (
    <Router>
      <nav style={{
        display: "flex",
        gap: "0.5rem",
        padding: "0.75rem 1rem",
        background: "#f5f5f5",
        borderBottom: "1px solid #ddd",
        position: "sticky",
        top: 0
      }}>
        <NavLink to="/" end>Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/contact">Contact</NavLink>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<main style={{ padding: '1rem' }}><h1>404 - Not Found</h1></main>} />
      </Routes>
    </Router>
  );
}
