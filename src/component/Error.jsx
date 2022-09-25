const Error = ({ error }) => {
  return (
    <>
      {error && (
        <div>
          {error.type === 403 ? (
            <div className="flex justify-center items-center h-10 px-4 py-2 font-semibold text-2xl transition ease-in-out duration-150 cursor-not-allowed dark:text-slate-500">
              Oh no, you hit the{" "}
              <a href="https://developer.github.com/v3/rate_limit/" target="_blank" rel="noopener noreferrer">
                rate limit
              </a>
              ! Try again later.
            </div>
          ) : error.type === 404 ? (
            <div className="flex justify-center items-center h-10 px-4 py-2 font-semibold text-2xl transition ease-in-out duration-150 cursor-not-allowed dark:text-slate-500">User not found!</div>
          ) : (
            <div className="flex justify-center items-center h-10 px-4 py-2 font-semibold text-2xl transition ease-in-out duration-150 cursor-not-allowed dark:text-slate-500" disabled>
              Oh no! Something went wrong. Try again later!
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default Error;
