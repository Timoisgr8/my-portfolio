import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from "@fortawesome/free-brands-svg-icons/faGithub";

function GitHubIcon() {
  return (
    <a href="https://github.com/timoisgr8" target="_blank" rel="noopener noreferrer" className="ml-2">
      <FontAwesomeIcon icon={faGithub} className="text-2xl text-current hover:text-gray-600" />
    </a>
  );
}

function Navbar({ isNotesOpen, setIsNotesOpen, activeSection }) {
  return (
    <div className="navbar bg-base-100 shadow-md w-full">
      {/* Left section: Title and GitHub */}
      <div className="navbar-start flex items-center">
        <a href="#hero" className={`btn btn-ghost text-xl ${activeSection === 'hero' ? 'text-primary' : ''}`}>
          Timothy Tew | Portfolio
        </a>
        <GitHubIcon />
      </div>

      {/* Middle section: Anchor Links */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <a href="#about" className={`btn btn-ghost ${activeSection === 'about' ? 'text-primary' : ''}`}>
              About
            </a>
          </li>
          <li>
            <a href="#projects" className={`btn btn-ghost ${activeSection === 'projects' ? 'text-primary' : ''}`}>
              Projects
            </a>
          </li>
          <li>
            <a href="#contact" className={`btn btn-ghost ${activeSection === 'contact' ? 'text-primary' : ''}`}>
              Contact
            </a>
          </li>
        </ul>
      </div>

      {/* Right section: Notes toggle */}
      <div className="navbar-end">
        <label className="label cursor-pointer flex items-center gap-2 mr-4">
          <span className="label-text">Notes</span>
          <input
            type="checkbox"
            className="toggle toggle-success"
            checked={isNotesOpen}
            onChange={() => setIsNotesOpen(prev => !prev)}
          />
        </label>
      </div>
    </div>
  );
}

export default Navbar;