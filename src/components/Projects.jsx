import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

function Projects() {
  const badgeColors = {
    Python: 'badge-success',
    JavaScript: 'badge-warning',
    React: 'badge-info',
    Tailwind: 'badge-accent',
  };

  const allProjects = [
    {
      id: 1,
      title: 'Probability Library',
      language: ['Python'],
      imageUrl: '/my-portfolio/project_images/probability_library.jpg',
      description: 'A Python library for working with probability distributions and statistics. Built with simplicity and clarity in mind for education and prototyping.',
    },
    {
      id: 2,
      title: 'Portfolio Website',
      language: ['Tailwind', 'React'],
      imageUrl: '/my-portfolio/project_images/probability_library.jpg',
      description: 'My personal portfolio built with React, Tailwind, and DaisyUI. Fully responsive, with theme toggling and project filtering.',
    },
    {
      id: 3,
      title: 'QuantGuide Timer',
      language: ['JavaScript'],
      imageUrl: '/my-portfolio/project_images/probability_library.jpg',
      description: 'A mission planning app for rebels to organize covert operations. Inspired by Star Wars and strategy games.',
    },
  ];

  const allLanguages = [...new Set(allProjects.flatMap((p) => p.language))];
  const [selectedLanguage, setSelectedLanguage] = useState(null);
  const [selectedProject, setSelectedProject] = useState(allProjects[0]);

  const filteredProjects = selectedLanguage
    ? allProjects.filter((p) => p.language.includes(selectedLanguage))
    : allProjects;

  return (
    <div id="projects" className="scroll-mt-20 grid grid-cols-1 md:grid-cols-3 gap-6 h-[85vh]  bg-base-100 rounded-box shadow-md p-4 overflow-hidden">

      {/* Left Column: Filter + Project List */}
      <div className="col-span-1 overflow-y-auto space-y-4 pr-2">
        {/* Filter Section */}
        <div className="flex flex-wrap gap-2">
          <button
            className={`btn btn-sm ${selectedLanguage === null ? 'btn-primary' : 'btn-outline'}`}
            onClick={() => setSelectedLanguage(null)}
          >
            All
          </button>
          {allLanguages.map((lang) => (
            <button
              key={lang}
              className={`btn btn-sm ${selectedLanguage === lang ? 'btn-primary' : 'btn-outline'}`}
              onClick={() => setSelectedLanguage(lang)}
            >
              {lang}
            </button>
          ))}
        </div>

        {/* Project List */}
        <div className="space-y-2">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              onClick={() => setSelectedProject(project)}
              className={`cursor-pointer p-3 rounded-box transition hover:bg-base-200 ${selectedProject.id === project.id ? 'bg-primary text-primary-content' : ''
                }`}
            >
              <div className="flex items-center gap-3">
                <img className="w-12 h-12 object-cover rounded-box" src={project.imageUrl} alt={project.title} />
                <div>
                  <div className="font-semibold">{project.title}</div>
                  <div className="flex flex-wrap gap-1 mt-1">
                    {project.language.map((lang) => (
                      <span
                        key={lang}
                        className={`badge badge-sm ${badgeColors[lang] || 'badge-neutral'}`}
                      >
                        {lang}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Right Column: Project Details */}
      <div className="col-span-2 bg-base-200 rounded-box p-6 overflow-y-auto">
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedProject.id}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 8 }}
            transition={{ duration: 0.3 }}
          >
            <h3 className="text-2xl font-bold mb-2">{selectedProject.title}</h3>
            <p className="text-sm opacity-70 mb-4">{selectedProject.language.join(', ')}</p>
            <img
              src={selectedProject.imageUrl}
              alt={selectedProject.title}
              className="w-full max-h-64 object-cover rounded-box mb-4"
            />
            <p className="text-base leading-relaxed">{selectedProject.description}</p>
          </motion.div>
        </AnimatePresence>
      </div>

    </div>
  );
}

export default Projects;