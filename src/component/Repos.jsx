import React, { useState } from "react";
import { useEffect } from "react";
import SectionTitle from "./SectionTitle";
import RepoItem from "./RepoItem";
import Error from "./Error";

const urlApi = `https://api.github.com/users/omkar-28/repos?per_page=100`;

const Repos = () => {
  const [repoData, setRepos] = useState([]);
  const [errorStat, setErrorStat] = useState({ active: false, type: 200 });
  const [loading, setloading] = useState(false);

  const fetchRepos = async () => {
    setloading(true);
    fetch(urlApi)
      .then((response) => {
        if (response.status === 404) {
          return setErrorStat({ active: true, type: 404 });
        }
        if (response.status === 403) {
          return setErrorStat({ active: true, type: 403 });
        }
        return response.json();
      })
      .then((json) => setRepos(json))
      .catch((error) => {
        setErrorStat({ active: true, type: 200 });
        console.error("Error:", error);
      });

    setloading(false);
  };

  useEffect(() => {
    fetch(`https://api.github.com/rate_limit`)
      .then((response) => response.json())
      .then((json) => {
        if (json.resources.core.remaining < 1) {
          setErrorStat({ active: true, type: 403 });
        }
      })
      .catch((error) => {
        setErrorStat({ active: true, type: 200 });
        console.error("Error:", error);
      });
    fetchRepos();
  }, []);

  let repoContent;
  if (loading) {
    repoContent = (
      <div className="flex justify-center items-center h-10 px-4 py-2 font-semibold text-2xl transition ease-in-out duration-150 cursor-not-allowed dark:text-slate-500" disabled>
        <img src="../assets/loader.svg" alt="loader" width={20} height={20} />
        Loading...
      </div>
    );
  } else if (errorStat && errorStat.active) {
    repoContent = <Error error={errorStat} />;
  } else {
    repoContent = (
      <div className="repo_grid text-center">
        <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 pb-5 text-center">
          <RepoItem topRepos={repoData} />
        </div>
        <a href="https://github.com/omkar-28" target={"_blank"} rel={"noopener noreferrer"} className="block px-8 py-2 mt-4 w-40 mx-auto text-lg font-semibold shadow-xl rounded bg-indigo-700 text-slate-100 shadow-indigo-900/50 dark:shadow-gray-900/50 hover:shadow-none transition-shadow duration-500 ease-in-out" disabled>
          Github
        </a>
      </div>
    );
  }

  return (
    <section className="repos antialiased py-20 lg:py-24 mx-auto">
      <SectionTitle>Repository</SectionTitle>
      {repoContent}
    </section>
  );
};

export default Repos;
