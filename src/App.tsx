// Page layout: fixed navbar, all page sections, and the footer.
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Education from "./components/Education";
import Honors from "./components/Honors";
import Certifications from "./components/Certifications";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen bg-canvas font-body text-ink antialiased selection:bg-brand selection:text-brand-ink">
      <Navbar />
      <main>
        <Hero />
        <Projects />
        <Skills />
        <Education />
        <Honors />
        <Certifications />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
