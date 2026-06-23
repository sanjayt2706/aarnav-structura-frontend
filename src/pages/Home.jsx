import Navbar from "../components/Navbar.jsx";
import Hero from "../components/Hero.jsx";
import Ticker from "../components/Ticker.jsx";
import Services from "../components/Services.jsx";
import About from "../components/About.jsx";
import Process from "../components/Process.jsx";
import Projects from "../components/Projects.jsx";
import Testimonials from "../components/Testimonials.jsx";
import Contact from "../components/Contact.jsx";
import Footer from "../components/Footer.jsx";
import useScrollReveal from "../hooks/useScrollReveal.js";

const Home = () => {
  // Activates the scroll-reveal animation for every ".reveal" element
  // across all sections, once they've mounted.
  useScrollReveal();

  return (
    <>
      <Navbar />
      <Hero />
      <Ticker />
      <Services />
      <About />
      <Process />
      <Projects />
      <Testimonials />
      <Contact />
      <Footer />
    </>
  );
};

export default Home;
