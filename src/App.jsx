import "./App.css";
import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/Home";
import MyWork from "./components/Mywork";
import Navbar from "./components/Navbar";
import Services from "./components/Services";
import Testimonials from "./components/Testimonials";
import SocialMediaManagement from "./components/SocialMediaManagement";
import { Routes, Route } from "react-router-dom";
function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/services/social-media-management" element={<SocialMediaManagement/>}></Route>
        <Route path="/mywork" element={<MyWork />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/testimonials" element={<Testimonials />} />
      </Routes>
    </>
  );
}

export default App;
