// App.jsx
import './App.css';
import './index.css';
import Navbar from './components/Navbar';
import About from './components/About';
import Contact from './components/Contact';
import Projects from './components/Projects';
import React, { useState } from 'react';  // <-- Add this import

function App() {
  const [activeTab, setActiveTab] = useState('about'); // Default to 'about' tab

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
      <Navbar setActiveTab={setActiveTab} />
      <div className="p-6">{renderContent()}</div>
    </>
  );
}

export default App;