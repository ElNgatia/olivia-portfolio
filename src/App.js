import "./App.css";
import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/Home";
import MyWork from "./components/Mywork";
import Navbar from "./components/Navbar";
import Services from "./components/Services";
import Testimonials from "./components/Testimonials";
import SocialMediaManagement from "./components/SocialMediaManagement";
import Consultations from "./components/Consultations";
import Coaching from "./components/Coaching";
import NotFound from "./components/NotFound";
import { Routes, Route, Navigate } from "react-router-dom";
function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route
          path="/services/social-media-management"
          element={<SocialMediaManagement />}
        />
        <Route path="/services/consultations" element={<Consultations />} />
        <Route path="/services/coaching" element={<Coaching />} />
        <Route path="/mywork" element={<MyWork />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/testimonials" element={<Testimonials />} />
        <Route path="/404" element={<NotFound/>} />
        <Route path="*" element={<Navigate replace to="/404" />} />
      </Routes>
    </>
  );
}

export default App;
