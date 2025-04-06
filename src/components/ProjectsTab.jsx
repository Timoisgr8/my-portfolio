import React from 'react';

export default function ProjectsTab({ projects }) {
  return (
    <div className="flex flex-wrap gap-4 justify-center">
      {projects.map((project) => (
        <div key={project.id} className="card w-80 bg-base-100 shadow-xl image-full relative">
          <figure>
            <img
              src={project.imageUrl}
              alt={project.title}
              className="object-cover h-48 w-full"
              onError={(e) => {
                e.target.onerror = null;
                e.target.style.backgroundColor = '#D1D5DB';
                e.target.src = '';
              }}
            />
          </figure>

          {/* Tags (top right) */}
          <div className="absolute top-2 right-2 flex flex-wrap gap-1">
            {project.language.map((lang, idx) => (
              <span key={idx} className="badge badge-neutral text-xs">
                {lang}
              </span>
            ))}
          </div>

          {/* Title (centered over image) */}
          <h2 className="card-title absolute inset-0 flex items-center justify-center text-white font-bold text-lg pointer-events-none">
            {project.title}
          </h2>

          {/* Description */}
          <div className="card-body mt-12">
            <p>{project.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}