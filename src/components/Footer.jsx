import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faDiscord } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer className="bg-base-200 text-center text-sm py-6 relative z-20">
      <div className="flex flex-col md:flex-row items-center justify-center gap-4">
        <span>Timothy Tew @ 2025</span>
        <div className="flex gap-4 text-lg">
          <a href="mailto:tewtimothy@gmail.com" aria-label="Email">
            <FontAwesomeIcon icon={faEnvelope} className="hover:text-blue-500" />
          </a>
          <a
            href="https://discord.com/users/193625710789787649"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Discord"
          >
            <FontAwesomeIcon icon={faDiscord} className="hover:text-indigo-500" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;