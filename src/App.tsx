import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Experience } from "@/components/Experience";
import { Projects } from "@/components/Projects";
import { Education } from "@/components/Education";
import { Achievements } from "@/components/Achievements";
import { Skills } from "@/components/Skills";
import { Footer } from "@/components/Footer";
import { LanguageProvider } from "@/lib/i18n";
import "./index.css";

export function App() {
  return (
    <LanguageProvider>
      <div className="min-h-screen">
        <Header />
        <main>
          <Hero />
          <Experience />
          <Projects />
          <Education />
          <Achievements />
          <Skills />
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  );
}

export default App;
