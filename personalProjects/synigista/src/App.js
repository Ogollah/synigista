import Header from "./components/header/header";
import Hero from "./components/hero/hero";
import Clients from "./components/clients/clients";
import About from "./components/about/about";
import Services from "./components/services/sevices";
import Team from "./components/team/team";
import "aos/dist/aos.css";
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
    </div>
  );
}

export default App;
