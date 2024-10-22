import { Home } from "./components/sections/Home";
import { Skills } from "./components/sections/Skills";
import { Experience } from "./components/sections/Experience";

export default function App() {
  return (
    <div className="scroll-snap-container">
      <Home />
      <Skills />
      <Experience />
    </div>
  );
}
