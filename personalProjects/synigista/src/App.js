import Header from "./components/header/header";
import Hero from "./components/hero/hero";
import Clients from "./components/clients/clients";
import About from "./components/about/about";
import Services from "./components/services/sevices";
import Team from "./components/team/team";
import Contact from "./components/contact/contact";
import Footer from "./components/footer/footer";
import "aos/dist/aos.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import GLightbox from "glightbox";
import AOS from "aos";

AOS.init();
function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Clients />
      <About />
      <Services />
      <Team />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
