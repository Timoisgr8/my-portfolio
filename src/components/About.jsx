import React, { useState, useEffect } from 'react';
import GitHubContributions from './GitHubContributions';

function About() {
  const [activeTab, setActiveTab] = useState('recent');
  const [repos, setRepos] = useState([]);
  const username = 'Timoisgr8'; // Your GitHub username

  useEffect(() => {
    fetch(`https://api.github.com/users/${username}/repos?per_page=100`)
      .then((res) => res.json())
      .then((data) => {
        const publicRepos = data.filter((repo) => !repo.fork && !repo.private);
        setRepos(publicRepos);
      })
      .catch((err) => console.error('Error fetching repos:', err));
  }, [username]);

  const recentRepos = [...repos]
    .sort((a, b) => new Date(b.pushed_at) - new Date(a.pushed_at))
    .slice(0, 3);

  const popularRepos = [...repos]
    .sort((a, b) => b.stargazers_count - a.stargazers_count)
    .slice(0, 3);

  return (
    <div className="flex flex-col md:flex-row justify-center items-start p-8 gap-10 h-auto md:h-[700px]">


      <div className="flex flex-col md:flex-row gap-6 md:gap-10 p-6">
        {/* About Me */}
        <div className="md:w-2/3 w-full flex flex-col">
          <div className="bg-base-200 rounded-xl shadow p-6 h-full flex flex-col justify-between space-y-4">
            <div>
              <h2 className="text-3xl font-bold mb-4 text-primary">About Me</h2>
              <p className="mb-2">
                <strong>Timothy Tew</strong> | Computer Science (Advanced), University of Adelaide
              </p>
              <p className="mb-2 text-sm text-base-content/80">
                tewtimothy@gmail.com • 0468 899 686 • Adelaide, SA 5000
                <br />
                <a className="link" href="https://www.linkedin.com/in/timothy-tew/" target="_blank" rel="noopener noreferrer">LinkedIn</a> &nbsp;|&nbsp;
                <a className="link" href="https://github.com/Timoisgr8" target="_blank" rel="noopener noreferrer">GitHub</a> &nbsp;|&nbsp;
                <a className="link" href="https://timoisgr8.github.io/my-portfolio/" target="_blank" rel="noopener noreferrer">Portfolio</a>
              </p>
              <p className="text-base-content">
                High-achieving Computer Science student with a passion for algorithms, problem-solving, and education-focused development. Proficient in C++ with strong Python skills, and familiar with web technologies including HTML, CSS, JavaScript, and MySQL. Experience includes full-stack and game development, NLP research, and algorithmic analysis in social networks.
              </p>
            </div>

            <div className="text-sm text-base-content/70 mt-4">
              <p className="mb-1"><strong>Skills:</strong> C++, Python, HTML/CSS/JS, MySQL</p>
              <p className="mb-1"><strong>Dev Environment:</strong> WSL on VSCode</p>
              <p className="mb-1"><strong>GPA:</strong> 6.933 / 7 • <strong>ATAR:</strong> 99.65 → 99.95</p>
              <p className="mb-1"><strong>Research:</strong> NLP on AI teacher posts (2025), Star Wars SNA clustering (2024)</p>
              <p className="mb-1"><strong>Project:</strong> Python Probability Library (2025)</p>
              <p className="mb-1"><strong>Awards:</strong> AMOC Honourable Mention, AIMOC Distinction</p>
              <p className="mb-1"><strong>Interests:</strong> Combinatorics, Bouldering, Learning</p>
              <p className="mb-1"><strong>Community:</strong> Competitive Programming Club</p>
            </div>
          </div>
        </div>

        {/* Right Column - Activity */}
        <div className="md:w-1/3 w-full flex flex-col gap-4">
          {/* GitHub Contributions */}
          <div className="bg-base-200 rounded-xl shadow p-4">
            <GitHubContributions username="Timoisgr8" />
          </div>

          {/* Tabs for Recent / Popular */}
          <div className="bg-base-200 rounded-xl shadow">
            <div className="flex justify-around border-b border-base-300">
              <button
                className={`w-full py-2 font-medium ${activeTab === 'recent'
                  ? 'border-b-2 border-primary text-primary'
                  : 'text-base-content/60'
                  }`}
                onClick={() => setActiveTab('recent')}
              >
                Recent
              </button>
              <button
                className={`w-full py-2 font-medium ${activeTab === 'popular'
                  ? 'border-b-2 border-primary text-primary'
                  : 'text-base-content/60'
                  }`}
                onClick={() => setActiveTab('popular')}
              >
                Popular
              </button>
            </div>

            {/* Tab Content */}
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
    </div>
  );
}

function RepoCard({ name, desc, stars, url }) {
  return (
    <a href={url} target="_blank" rel="noopener noreferrer">
      <div className="card bg-base-100 shadow-md border border-base-300 hover:shadow-lg transition-all duration-200">
        <div className="card-body p-4">
          <h4 className="card-title text-primary">{name}</h4>
          <p className="text-sm text-base-content/70 line-clamp-3">
            {desc || 'No description provided.'}
          </p>
          <div className="mt-2 flex justify-between items-center text-sm">
            <div className="flex gap-2 items-center">
              <span className="badge badge-outline text-warning">
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