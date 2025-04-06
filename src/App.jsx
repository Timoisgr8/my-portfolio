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

  // Function to handle the intersection observer and update active section
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
      {
        threshold: 0.5, // Trigger when 50% of the section is visible
      }
    );

    sections.forEach((section) => {
      observer.observe(section);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div className="relative">
      {/* Background is rendered outside the App component */}
      <Background />

      <div className="z-10 relative">
        {/* Hero Section */}
        <section id="hero" className="min-h-screen w-full flex flex-col items-center justify-center text-center px-4 relative z-20">
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

        <div className="space-y-20 relative z-20">
          <section id="about" className="min-h-screen w-full px-30 py-12 relative z-20">
            <About />
          </section>

          <section id="projects" className="min-h-screen w-full px-30 py-12 relative z-20">
            <Projects />
          </section>

          <section id="contact" className="w-full px-30 py-12 relative z-20">
            <Contact />
          </section>
        </div>

        <Footer />

        {/* Notes panel */}
        <Notes isOpen={isNotesOpen} setIsOpen={setIsNotesOpen} />
      </div>
    </div>
  );
}

export default App;