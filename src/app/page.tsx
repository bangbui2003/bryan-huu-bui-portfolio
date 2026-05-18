import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import ResumeSection from "@/components/ResumeSection";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import CursorGlow from "@/components/CursorGlow";

export default function Home() {
  return (
    <>
      <CursorGlow />
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <ResumeSection />
        <Projects />
        <Experience />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
