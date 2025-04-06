import React, { useState, useRef, useEffect } from 'react';
import ProjectsTab from './ProjectsTab';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilter } from '@fortawesome/free-solid-svg-icons';
import { AnimatePresence, motion } from 'framer-motion';

function Projects() {
  const allProjects = [
    {
      id: 1,
      title: 'Probability Library',
      language: ['Python'],
      imageUrl: '/my-portfolio/project_images/probability_library.jpg',
      description: 'A python library',
    },
    {
      id: 2,
      title: 'Portfolio Website',
      language: ['Tailwind', 'React'],
      imageUrl: '/images/droid.jpg',
      description: 'A portfolio website built using React and Tailwind CSS.',
    },
    {
      id: 3,
      title: 'Rebel Planner',
      language: ['JavaScript'],
      imageUrl: '/images/rebel.jpg',
      description: 'Plan secret missions and escape routes for rebel operations.',
    },
  ];

  const allTags = Array.from(new Set(allProjects.flatMap((p) => p.language)));
  const [selectedTags, setSelectedTags] = useState([]);
  const [showFilters, setShowFilters] = useState(false);
  const filterRef = useRef();

  const toggleTag = (tag) => {
    setSelectedTags((prev) =>
      prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]
    );
  };

  const filteredProjects =
    selectedTags.length === 0
      ? allProjects
      : allProjects.filter((project) =>
          project.language.some((lang) => selectedTags.includes(lang))
        );

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (filterRef.current && !filterRef.current.contains(event.target)) {
        setShowFilters(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="relative w-full">
      <div className="flex items-center gap-2 mb-6">
        <h2 className="text-2xl font-bold">Projects</h2>
        <button
          className="btn btn-sm btn-outline"
          onClick={() => setShowFilters(!showFilters)}
        >
          <FontAwesomeIcon icon={faFilter} />
        </button>
      </div>

      {/* Floating Filter Panel */}
      <AnimatePresence>
        {showFilters && (
          <motion.div
            ref={filterRef}
            initial={{ opacity: 0, scale: 0.95, y: -10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -10 }}
            transition={{ duration: 0.2 }}
            className="absolute z-50 top-14 left-0 bg-white border border-gray-200 rounded-lg shadow-lg p-4 w-full max-w-[400px]"
          >
            <div className="flex flex-wrap gap-2">
              <button
                className={`badge badge-outline ${selectedTags.length === 0 ? 'badge-primary' : ''}`}
                onClick={() => setSelectedTags([])}
              >
                All
              </button>
              {allTags.map((tag) => (
                <button
                  key={tag}
                  className={`badge badge-outline ${selectedTags.includes(tag) ? 'badge-primary' : ''}`}
                  onClick={() => toggleTag(tag)}
                >
                  {tag}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Projects */}
      <ProjectsTab projects={filteredProjects} />
    </div>
  );
}

export default Projects;