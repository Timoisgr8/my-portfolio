import './App.css';
import './index.css';
import Navbar from './components/Navbar';
import About from './components/About';
import Contact from './components/Contact';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Notes from './components/Notes';
import Footer from './components/Footer';
import Background from './components/Background';

import React, { useState, useEffect } from 'react';

function App() {
  const [isNotesOpen, setIsNotesOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const sections = document.querySelectorAll('section');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.5 }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="relative min-h-screen overflow-x-visible">
      {/* Persistent background */}
      <Background />

      {/* Main content overlay */}
      <div className="relative z-10">
        {/* Hero Section */}
        <section
          id="hero"
          className="min-h-screen w-full flex flex-col items-center justify-center text-center scroll-mt-20"
        >
          <Hero />
        </section>

        {/* Sticky Navbar */}
        <div className="sticky top-0 w-full z-30">
          <Navbar
            setIsNotesOpen={setIsNotesOpen}
            isNotesOpen={isNotesOpen}
            activeSection={activeSection}
          />
        </div>

        {/* Main Sections */}
        <div className="flex flex-col space-y-20 px-4 sm:px-6 md:px-8 lg:px-12 py-12">

          <section id="about" className=" min-h-screen  scroll-mt-20">
            <About />
          </section>

          <section id="projects" className=" min-h-screen  scroll-mt-20">
            <Projects />
          </section>

          <section id="contact" className="scroll-mt-20">
            <Contact />
          </section>
        </div>

        <Footer />

        {/* Notes Panel */}
        <Notes isOpen={isNotesOpen} setIsOpen={setIsNotesOpen} />
      </div>
    </div>
  );
}

export default App;