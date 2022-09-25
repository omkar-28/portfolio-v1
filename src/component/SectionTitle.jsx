const SectionTitle = ({ children }) => {
  return (
    <h4 className="flex flex-row items-center text-3xl font-bold mb-10 text-indigo-600 dark:text-slate-300">
      <span>
        <svg className="mr-3 fill-indigo-200 dark:fill-slate-700" xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24">
          <path d="M4 11h6a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1zm10 0h6a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1h-6a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1zM4 21h6a1 1 0 0 0 1-1v-6a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1zm10 0h6a1 1 0 0 0 1-1v-6a1 1 0 0 0-1-1h-6a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1z"></path>
        </svg>
      </span>{" "}
      {children} <span className="ml-3 flex-grow max-w-xl align-middle border-t-2 border-indigo-200 dark:border-slate-700"></span>
    </h4>
  );
};

export default SectionTitle;
