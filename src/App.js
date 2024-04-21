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
import { Routes, Route } from "react-router-dom";
import { Switch } from "@material-tailwind/react";
function App() {
  return (
    <>
      <Navbar />
      <Switch>
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
          <Route component={NotFound} />
        </Routes>
      </Switch>
    </>
  );
}

export default App;
