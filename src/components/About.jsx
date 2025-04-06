import React, { useState, useEffect } from 'react';

function About() {
  const [activeTab, setActiveTab] = useState('recent');
  const [repos, setRepos] = useState([]);
  const username = 'Timoisgr8';

  useEffect(() => {
    fetch(`https://api.github.com/users/${username}/repos?per_page=100`)
      .then((res) => res.json())
      .then((data) => {
        // Filter out forked or private repos if desired
        const publicRepos = data.filter((repo) => !repo.fork && !repo.private);
        setRepos(publicRepos);
      })
      .catch((err) => console.error('Error fetching repos:', err));
  }, []);

  const recentRepos = [...repos]
    .sort((a, b) => new Date(b.pushed_at) - new Date(a.pushed_at))
    .slice(0, 3);

  const popularRepos = [...repos]
    .sort((a, b) => b.stargazers_count - a.stargazers_count)
    .slice(0, 3);

  return (
    <div className="flex flex-col md:flex-row justify-center items-start p-8 gap-10">
      {/* About Me */}
      <div className="w-full md:w-2/3">
        <h2 className="text-3xl font-bold mb-4">About Me</h2>
        <p className="text-gray-700 leading-relaxed">
          I'm a developer passionate about creating tools that make learning and collaboration easier.
          Currently building projects in React, C++, and Python, with an eye on accessible design and education tech.
        </p>
      </div>

      {/* My Activity */}
      <div className="w-full md:w-1/3 space-y-4">
        {/* Contributions Chart */}
        <div className="bg-gray-100 rounded-xl shadow p-4">
          <h3 className="text-lg font-semibold mb-2">GitHub Contributions</h3>
          <img
            src={`https://ghchart.rshah.org/${username}`}
            alt="GitHub contributions chart"
            className="w-full h-auto border rounded"
          />
          <p className="text-sm mt-2">
            Check out my GitHub 👉{' '}
            <a
              href={`https://github.com/${username}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-600 underline"
            >
              github.com/{username}
            </a>
          </p>
        </div>

        {/* Recent/Popular Tabs */}
        <div className="bg-gray-100 rounded-xl shadow">
          <div className="flex justify-around border-b">
            <button
              className={`w-full py-2 font-medium ${activeTab === 'recent' ? 'border-b-2 border-blue-500' : 'text-gray-500'}`}
              onClick={() => setActiveTab('recent')}
            >
              Recent
            </button>
            <button
              className={`w-full py-2 font-medium ${activeTab === 'popular' ? 'border-b-2 border-blue-500' : 'text-gray-500'}`}
              onClick={() => setActiveTab('popular')}
            >
              Popular
            </button>
          </div>

          {/* Tab content */}
          <div className="p-4 space-y-3">
            {(activeTab === 'recent' ? recentRepos : popularRepos).map((repo) => (
              <RepoCard
                key={repo.id}
                name={repo.name}
                desc={repo.description}
                stars={repo.stargazers_count}
                url={repo.html_url}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function RepoCard({ name, desc, stars, url }) {
  return (
    <a href={url} target="_blank" rel="noopener noreferrer">
      <div className="card bg-base-100 shadow-md border hover:shadow-lg transition-all duration-200">
        <div className="card-body p-4">
          <h4 className="card-title text-primary">{name}</h4>
          <p className="text-sm text-gray-500 line-clamp-3">
            {desc || "No description provided."}
          </p>
          <div className="mt-2 flex justify-between items-center text-sm">
            <div className="flex gap-2 items-center">
              <span className="badge badge-outline text-yellow-500">
                ⭐ {stars}
              </span>
            </div>
            <span className="link link-hover text-primary text-xs">View →</span>
          </div>
        </div>
      </div>
    </a>
  );
}

export default About;