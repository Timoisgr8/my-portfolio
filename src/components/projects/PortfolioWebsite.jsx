import React, { useState } from 'react';

export default function PortfolioWebsite() {
  // State to toggle visibility of the inception iframe
  const [isIframeVisible, setIsIframeVisible] = useState(true);

  const toggleIframeVisibility = () => {
    setIsIframeVisible((prevState) => !prevState);
  };

  return (
    <div className="prose max-w-none">
      <h4 className="text-xl font-bold mb-2">🧠 PortfolioWebsite — A Meta Showcase of Itself</h4>
      <p>
        <code className="bg-neutral p-1 rounded-md inline-block">PortfolioWebsite</code> is a personal project that combines design, functionality, and a bit of recursion.
        It serves as a central hub to showcase my projects, thoughts, and skills — all wrapped in a clean, interactive UI built with React, Vite, and DaisyUI.
      </p>
      
      <h5 className="mt-4 font-semibold">🌐 Features</h5>
      <ul>
        <li>Sections for Projects, About Me, GitHub activity, and Notes.</li>
        <li>Responsive and stylish thanks to TailwindCSS and DaisyUI.</li>
        <li>Dynamic project views with tabs, scrollable layouts, and modals.</li>
        <li>Built with clean architecture and reusable components.</li>
      </ul>

      <h5 className="mt-4 font-semibold">🌀 Inception Mode</h5>
      <p>
        Behold! Below is this very site, embedded within itself. Because, why not?
      </p>

      {/* Toggle button for collapsing the iframe */}
      <button 
        onClick={toggleIframeVisibility} 
        className="btn btn-primary mb-4">
        {isIframeVisible ? 'Collapse Inception' : 'Expand Inception'}
      </button>

      {/* Conditionally render the iframe */}
      {isIframeVisible && (
        <div className="mockup-browser border bg-base-300 mb-6">
          <div className="mockup-browser-toolbar">
            <div className="input border border-base-300 bg-base-100">https://timoisgr8.github.io/my-portfolio/</div>
          </div>
          <div className="flex justify-center bg-base-200">
            <iframe
              src="https://timoisgr8.github.io/my-portfolio/"
              title="Portfolio Inception"
              width="100%"
              height="500"
              className="border-none"
            ></iframe>
          </div>
        </div>
      )}

      <p>
        Note: Depending on browser sandboxing and CORS settings, you may need to host the site live to see the inception iframe working.
      </p>
    </div>
  );
}