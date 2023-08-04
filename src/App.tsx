import Navbar from "./components/Navbar";
import HomePage from "./pages/home/Home_page";
import { Route, Routes } from "react-router-dom";

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

function AboutPage() {
  return <h1>Welcome to the Aboutpage</h1>;
}

function ContactPage() {
  return <h1>Welcome to the Contactpage</h1>;
}
function ExpierencePage() {
  return <h1>Welcome to the Expierencepage</h1>;
}
function ProjectsPage() {
  return <h1>Welcome to the Projectspage</h1>;
}
function SkillsPage() {
  return <h1>Welcome to the Skillspage</h1>;
}

export default App;
