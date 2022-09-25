import React from "react";
import { employers } from "../utils/data";
import SectionTitle from "./SectionTitle";

const employersTitle = ["V3iT", "TargetClose", "Darshan Design"];

const Experience = () => {
  const [selected, setSelected] = React.useState(0);
  return (
    <section className="antialiased max-w-4xl mx-auto py-20 lg:py-24">
      <SectionTitle>Experience</SectionTitle>
      <div className="flex flex-col max-w-3xl  mx-auto justify-center">
        <div className="relative mb-4">
          <ul className="relative flex flex-row flex-wrap justify-evenly">
            {employersTitle.map((employer, index) => (
              <li className="grow font-medium" key={index}>
                <button type="button" onClick={() => setSelected(index)} aria-selected={selected === index} className={`${selected === index ? "bg-indigo-600 shadow-lg" : "text-slate-500"} mb-3 py-2 font-medium rounded px-3 w-full flex justify-center items-center focus:outline-none focus-visible:underline`}>
                  <span className={`h-3 w-3 transition-all ease-out transition-medium mr-1`}>
                    <svg className={`${selected === index ? "fill-slate-200" : "fill-slate-500"}`} xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24">
                      <path d="M20 6h-3V4c0-1.103-.897-2-2-2H9c-1.103 0-2 .897-2 2v2H4c-1.103 0-2 .897-2 2v3h20V8c0-1.103-.897-2-2-2zM9 4h6v2H9V4zm5 10h-4v-2H2v7c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2v-7h-8v2z"></path>
                    </svg>
                  </span>
                  <span className={`${selected === index ? "text-slate-200" : "text-slate-400"} ml-2 text-md font-bold transition-all ease-out transition-medium`}>{employer}</span>
                </button>
              </li>
            ))}
          </ul>
        </div>
        <div className="max-w-2xl px-5 mx-auto">
          {employers.map(({ employer, html }, i) => (
            <div className={`${selected === i ? "scale-100" : "hidden scale-75"} jobs__panel transition-all duration-400 ease-in-out`} key={employer.title}>
              <h3 className="text-xl font-semibold dark:text-slate-300">
                <span>{`${employer.title}`}</span>
                <span className="company text-indigo-600 dark:text-indigo-400">
                  &nbsp;@&nbsp;
                  <a href={employer.url} className="inline-link" rel="noopener noreferrer" target="_blank">
                    {employer.company}
                  </a>
                </span>
              </h3>
              <p className="range mb-4 text-md font-medium dark:text-slate-500">{employer.range}</p>
              <div className="dark:text-slate-400 font-medium " dangerouslySetInnerHTML={{ __html: html }}></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
