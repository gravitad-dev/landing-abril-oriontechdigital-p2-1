import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import SliderComponent from "./components/Sections/SliderComponent";
import About from "./components/Sections/About";
import Future from "./components/Sections/Future";
import Say from "./components/Sections/Say";
import Testimonials from "./components/Sections/Testimonials";
import How from "./components/Sections/How";
import Last from "./components/Sections/Last";
import Footer from "./Footer/Footer";
import SocialButtons from "./components/Socials";

function App() {
  return (
    <main>
      <Navbar />
      <Hero />
      <SliderComponent />
      <About />
      <Future />
      <Say />
      <Testimonials />
      <Last />
      <How />
      <Footer />
    </main>
  );
}

export default App;
