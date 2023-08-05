import { ProjectsPage } from "./pages/projects/Projects_page";
import Navbar from "./components/Navbar";
import HomePage from "./pages/home/Home_page";
import { Route, Routes } from "react-router-dom";
import { AboutPage } from "./pages/about/About_page";
import { ContactPage } from "./pages/contact/Contact_page";
import { ExpierencePage } from "./pages/expierence/Expierence_page";
import { SkillsPage } from "./pages/skills/Skills_page";

function App() {
  return (
    <div>
      <Navbar  />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/expierence" element={<ExpierencePage />} />
        <Route path="/skills" element={<SkillsPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </div>
  );
}

export default App;
