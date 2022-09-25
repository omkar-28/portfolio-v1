import { useEffect, useState } from "react";
import langColors from "../utils/langColor";
const RepoItem = ({ topRepos }) => {
  const [topRepo, setTopRepos] = useState([]);

  useEffect(() => {
    if (topRepos.length) {
      getRepo("stargazers_count");
    }
    // eslint-disable-next-line
  }, [topRepos]);

  const getRepo = (type) => {
    const Limit = 9;

    const sorted = topRepos
      .filter((repo) => !repo.fork && repo.name !== "portfolio" && repo.stargazers_count >= 1)
      // .sort((a, b) => b[type] - a[type])
      .sort((a, b) => new Date(b.created_at) - new Date(a.created_at))
      .slice(0, Limit);
    setTopRepos(sorted);
  };

  return (
    <>
      {topRepo.map((repo) => (
        <div key={repo.id} className="p-6 repos__item overflow-hidden rounded-lg shadow-md bg-slate-600 text-slate-300 dark:bg-gray-900">
          <a href={repo.html_url} aria-label="External Link" className="h-full external flex flex-col justify-between" target="_blank" rel="noopener noreferrer">
            <div className="repos-top">
              <h3 className="repos-title text-xl font-semibold text-left mb-2 dark:text-slate-400">{repo.name}</h3>
              <div className="project-description text-left mb-5">
                <p>{repo.description}</p>
              </div>
            </div>
            <div className="repos_stats">
              <div className="border-b-2 border-slate-300  dark:border-indigo-500 flex flex-row justify-between pt-2 pb-5 mb-5 items-center ">
                <button className="px-2 py-1 font-medium rounded-md bg-gray-800 text-slate-300 shadow-indigo-900/50">
                  <i className="devicon-github-original"></i> Repo
                </button>
              </div>
              <div className=" flex items-center">
                {repo.language && (
                  <div className="flex items-center mr-4">
                    <div className="language h-3 w-3 rounded mr-2" style={{ backgroundColor: langColors[repo.language] }} />
                    {repo.language}
                  </div>
                )}
                <div className="flex items-center mr-4">
                  <span className="w-4 h-4 fill-current dark:text-slate-400 mr-2"></span>
                </div>
                <div className="flex items-center">
                  <span className="w-4 h-4 fill-current dark:text-slate-400 mr-2"></span>
                </div>
              </div>
            </div>
          </a>
        </div>
      ))}
    </>
  );
};

export default RepoItem;
