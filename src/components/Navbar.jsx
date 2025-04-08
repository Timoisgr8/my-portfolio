import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faBars } from '@fortawesome/free-solid-svg-icons';

function GitHubIcon() {
  return (
    <a
      href="https://github.com/timoisgr8"
      target="_blank"
      rel="noopener noreferrer"
      className="ml-2"
    >
      <FontAwesomeIcon icon={faGithub} className="text-2xl text-current hover:text-gray-600" />
    </a>
  );
}

function LinedInIcon() {
  return (
    <a
      href="https://www.linkedin.com/in/timothy-tew/"
      target="_blank"
      rel="noopener noreferrer"
      className="ml-2"
    >
      <FontAwesomeIcon icon={faLinkedin} className="text-2xl text-current hover:text-[#2e65c2]" />
    </a>
  );
}

function Navbar({ isNotesOpen, setIsNotesOpen, activeSection }) {
  return (
    <div className="navbar bg-base-100 shadow-md px-4">
      {/* Start */}
      <div className="navbar-start">
        {/* Hamburger for mobile */}
        <div className="dropdown lg:hidden">
          <label tabIndex={0} className="btn btn-ghost">
            <FontAwesomeIcon icon={faBars} className="text-xl" />
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li><a href="#about" className={activeSection === 'about' ? 'text-primary' : ''}>About</a></li>
            <li><a href="#projects" className={activeSection === 'projects' ? 'text-primary' : ''}>Projects</a></li>
            <li><a href="#contact" className={activeSection === 'contact' ? 'text-primary' : ''}>Contact</a></li>
          </ul>
        </div>

        {/* Title */}
        <a
          href="#hero"
          className={`btn btn-ghost text-lg font-bold ${activeSection === 'hero' ? 'text-primary' : ''}`}
        >
          Timothy Tew
        </a>

        {/* GitHub */}
        <GitHubIcon />

        {/* LinkedIn */}
        <LinedInIcon />
      </div>

      {/* Center - Desktop menu */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li><a href="#about" className={activeSection === 'about' ? 'text-primary' : ''}>About</a></li>
          <li><a href="#projects" className={activeSection === 'projects' ? 'text-primary' : ''}>Projects</a></li>
          <li><a href="#contact" className={activeSection === 'contact' ? 'text-primary' : ''}>Contact</a></li>
        </ul>
      </div>

      {/* End - Notes toggle */}
      <div className="navbar-end">
        <label className="label cursor-pointer flex items-center gap-2">
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