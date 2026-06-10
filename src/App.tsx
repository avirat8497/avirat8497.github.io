import { navItems } from './data/portfolio';
import { useScrollSpy } from './hooks/useScrollSpy';
import { useTheme } from './hooks/useTheme';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Playbook } from './components/Playbook';
import { Experience } from './components/Experience';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

function App() {
  const sectionIds = navItems.map((item) => item.id);
  const activeSection = useScrollSpy(sectionIds);
  const { isDark, toggle } = useTheme();

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleDownloadCV = () => {
    const link = document.createElement('a');
    link.href = '/AVB_Resume_DS.pdf';
    link.download = 'Avirat_Belekar_CV.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="min-h-screen overflow-x-hidden bg-black">
      <Navbar
        activeSection={activeSection}
        onNavigate={scrollTo}
        isDark={isDark}
        onToggleTheme={toggle}
      />
      <Hero onScrollTo={scrollTo} onDownloadCV={handleDownloadCV} />
      <About />
      <Playbook />
      <Experience />
      <Skills />
      <Projects />
      <Contact />
      <Footer onNavigate={scrollTo} />
    </div>
  );
}

export default App;
