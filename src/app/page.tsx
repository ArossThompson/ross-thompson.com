import { Home } from "./components/sections/Home";
import { Skills } from "./components/sections/Skills";
import { Experience } from "./components/sections/Experience";
import { Footer } from "./components/sections/Footer";
import { Contact } from "./components/sections/Contact";

export default function App() {
  return (
    <div className="scroll-snap-container">
      <Home />
      <Skills />
      <Experience />
      <Contact />
      <Footer />
    </div>
  );
}
