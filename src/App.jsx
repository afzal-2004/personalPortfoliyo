import { Footer } from "./Components/Footer";
import { Navbar } from "./Components/Navbar";
import { Conatct } from "./Pages/Contact/Conatct";
import { Experiences } from "./Pages/Experience/Experiences";
import { Home } from "./Pages/Home/Home";
import { Projects } from "./Pages/Project/Projects";
import { Services } from "./Pages/Services/Services";
import { Skills } from "./Pages/Skills/Skills";
function App() {
  return (
    <>
      <Navbar />
      <Home />
      <Skills />
      <Projects />
      <Experiences />
      <Services />
      <Conatct />
      <Footer />
    </>
  );
}

export default App;
