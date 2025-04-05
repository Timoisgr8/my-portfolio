import React from 'react';

function Navbar({ setActiveTab, isNotesOpen, setIsNotesOpen }) {
  return (
    <div className="navbar bg-base-100 shadow-sm">
      <div className="navbar-start">
        <a className="btn btn-ghost text-xl">Timothy Tew | Portfolio</a>
      </div>

      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <button className="btn btn-ghost" onClick={() => setActiveTab('about')}>About</button>
          </li>
          <li>
            <button className="btn btn-ghost" onClick={() => setActiveTab('projects')}>Projects</button>
          </li>
          <li>
            <button className="btn btn-ghost" onClick={() => setActiveTab('contact')}>Contact</button>
          </li>
        </ul>
      </div>

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