import Navbar from "../components/Navbar";
import ScrollProgress from "../components/ScrollProgress";
import Hero from "../components/Hero";
import About from "../components/About";
import Services from "../components/Services";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Experience from "../components/Experience";
import PeanutBusiness from "../components/PeanutBusiness";
import Certifications from "../components/Certifications";
import Testimonials from "../components/Testimonials";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <div className="pointer-events-none fixed inset-0 -z-10 grid-bg opacity-[0.35]" />
      <div className="pointer-events-none fixed inset-x-0 top-0 -z-10 h-[36rem] bg-gradient-to-b from-brand-500/10 via-transparent to-transparent" />

      <ScrollProgress />
      <Navbar />

      <main>
        <Hero />
        <About />
        <Services />
        <Skills />
        <Projects />
        <Experience />
        <PeanutBusiness />   {/* 👈 new section */}
        <Certifications />
        <Testimonials />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}