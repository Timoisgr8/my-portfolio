import './App.css';
import './index.css';
import Navbar from './components/Navbar';
import About from './components/About';
import Contact from './components/Contact';
import Projects from './components/Projects';
import Notes from './components/Notes';
import React, { useState } from 'react';

function App() {
  const [activeTab, setActiveTab] = useState('about');
  const [isNotesOpen, setIsNotesOpen] = useState(false);

  const renderContent = () => {
    switch (activeTab) {
      case 'about':
        return <About />;
      case 'contact':
        return <Contact />;
      case 'projects':
        return <Projects />;
      default:
        return <About />;
    }
  };

  return (
    <>
      <Navbar setActiveTab={setActiveTab} isNotesOpen={isNotesOpen} setIsNotesOpen={setIsNotesOpen} />
      <div className="p-6">{renderContent()}</div>
      <Notes isOpen={isNotesOpen} setIsOpen={setIsNotesOpen} />
    </>
  );
}

export default App;