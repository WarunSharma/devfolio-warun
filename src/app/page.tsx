import Hero from '@/components/Hero';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import PastCompanies from '@/components/PastCompanies';

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <PastCompanies />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}
