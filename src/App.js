import './App.css';
import About from './components/About';
import Contact from './components/Contact';
import MyWork from './components/Mywork';
import Navbar from './components/Navbar';
import Services from './components/Services';
import Testimonials from './components/Testimonials';

function App() {
  return (
    <main >
      <Navbar />
      <About />
      <Services />
      <MyWork />
      <Contact />
      <Testimonials />
    </main>
  );
}

export default App;
