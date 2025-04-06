import React from 'react';

function GitHubContributions({ username }) {
  return (
    <div className="bg-base-200 rounded-xl shadow p-4">
      <h3 className="text-lg font-semibold mb-2 text-secondary">GitHub Contributions</h3>

      {/* Display contributions chart from ghchart.rshah.org */}
      <img
        src={`https://ghchart.rshah.org/${username}`}
        alt="GitHub contributions chart"
        className="w-full h-auto rounded-md"
      />

      <p className="text-sm mt-2 text-base-content">
        Check out my GitHub 👉{' '}
        <a
          href={`https://github.com/${username}`}
          target="_blank"
          rel="noopener noreferrer"
          className="link link-primary"
        >
          github.com/{username}
        </a>
      </p>
    </div>
  );
}

export default GitHubContributions;