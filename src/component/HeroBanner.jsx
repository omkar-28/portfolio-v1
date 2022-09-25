import RESUME from "../assets/omkar_khatavkar_resume.pdf";
const HeroBanner = () => {
  return (
    <section className="hero_section text-center pt-28 pb-32" id="hero">
      <h1 className="text-md font-bold leading-none text-indigo-600 pb-4">Hi, my name is</h1>
      <h2 className="text-4xl sm:text-5xl md:text-7xl mb-2 text-gray-700 dark:text-slate-300 font-bold leading-none ">Omkar Khatavkar</h2>
      <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-600 dark:text-slate-500 leading-none">Frontend Developer</h3>

      <div className="flex flex-wrap justify-center py-14">
        <a href="https://github.com/omkar-28" target={"_blank"} rel={"noopener noreferrer"} className="flex items-center justify-center text-3xl w-10 h-10 sm:h-12 sm:w-12 rounded-full bg-indigo-500 text-gray-200 dark:bg-gray-700 dark:text-gray-900 shadow-xl hover:-translate-y-1 hover:dark:bg-gray-600 hover:dark:text-gray-800 transition ease-in-out duration-500">
          <span className="sr-only">Github Icon</span>
          <i className="devicon-github-original"></i>
        </a>
        <a href="https://www.linkedin.com/in/omkar-khatavkar-bb7051117/" target={"_blank"} rel={"noopener noreferrer"} className="mx-3 flex items-center justify-center text-2xl w-10 h-10 sm:h-12 sm:w-12 rounded-full bg-indigo-500 text-gray-200 dark:bg-gray-700 dark:text-gray-900 shadow-xl hover:-translate-y-1 hover:dark:bg-gray-600 hover:dark:text-gray-800 transition ease-in-out duration-500">
          <span className="sr-only">LinkedIn Icon</span>

          <i className="devicon-linkedin-plain"></i>
        </a>
        <a href="mailto:omikhatavkar2@gmail.com" target={"_blank"} rel={"noopener noreferrer"} className="flex items-center justify-center text-3xl w-10 h-10 sm:h-12 sm:w-12 rounded-full bg-indigo-500 text-gray-200 dark:bg-gray-700 dark:text-gray-900 shadow-xl hover:-translate-y-1 hover:dark:bg-gray-600 hover:dark:text-gray-800 transition ease-in-out duration-500">
          <span className="sr-only">Gmail Icon</span>
          <svg className="fill-gray-200 dark:fill-gray-900 hover:fill-gray-200 dark:hover:fill-gray-800 transition ease-in-out duration-500" xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="current">
            <path d="m18.73 5.41-1.28 1L12 10.46 6.55 6.37l-1.28-1A2 2 0 0 0 2 7.05v11.59A1.36 1.36 0 0 0 3.36 20h3.19v-7.72L12 16.37l5.45-4.09V20h3.19A1.36 1.36 0 0 0 22 18.64V7.05a2 2 0 0 0-3.27-1.64z"></path>
          </svg>
        </a>
      </div>

      <div className="flex flex-wrap justify-center">
        <a href={RESUME} title="resume" target="_blank" rel="noopener noreferrer" className="px-8 py-2 m-2 text-sm sm:text-lg md:text-lg font-semibold shadow-lg text-gray-600 rounded dark:text-slate-200 border-2 border-indigo-500 dark:border-slate-500 hover:bg-indigo-500/[.1] hover:shadow-indigo-900/50 dark:hover:bg-indigo-500/[.1] dark:hover:shadow-gray-900/50 transition-all duration-500 ease-in-out">
          Resume
        </a>
      </div>
    </section>
  );
};

export default HeroBanner;
