import { Routes, Route } from "react-router-dom";
import Home from "./Body/Home";
import About from "./Body/About";
import Blog from "./Body/Blog";
import Contact from "./Body/Contact";

function Components() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
}

export default Components;
