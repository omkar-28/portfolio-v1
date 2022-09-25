import { Popover } from "@headlessui/react";
import { useThemeSwitcher } from "../hooks/useThemeSwitcher";
import LOGO from "../assets/logo-svg.svg";

const AppHeader = () => {
  const [activeTheme, setTheme] = useThemeSwitcher();

  return (
    <>
      {/* <header className="sticky bg-slate-200 dark:bg-gray-800 top-0 z-50 w-ful p-4 shadow-lg"> */}
      <header className=" p-4 ">
        <div className="container flex justify-between mx-auto">
          <Popover className="w-full">
            <nav className="relative flex items-center justify-between sm:h-10 lg:justify-start" aria-label="Global">
              <div className="flex flex-shrink-0 flex-grow items-center lg:flex-grow-0">
                <div className="flex w-full items-center justify-between md:w-auto">
                  <a href="/" className="font-bold text-indigo-600 text-4xl">
                    <span className="sr-only">Omkar Khatavkar</span>
                    <img src={LOGO} alt="Omkar Khatavkar" width={48} height={48} />
                  </a>
                  <div className="mr-2 flex items-center md:hidden">
                    <Popover.Button className="inline-flex items-center justify-center rounded-md  p-2 text-gray-700 dark:text-slate-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none">
                      <span className="sr-only">Open main menu</span>
                      {/* <FaBars className="h-6 w-6" aria-hidden="true" /> */}
                    </Popover.Button>
                  </div>
                </div>
              </div>
            </nav>
          </Popover>
          <button type="button" onClick={() => setTheme(activeTheme)} className="bg-gray-700 shadow-lg shadow-gray-600/50 dark:bg-slate-200 dark:shadow-lg dark:shadow-gray-500/100 text-lg p-2 rounded-md">
            {activeTheme === "dark" ? "🌙" : "🌞"}
          </button>
        </div>
      </header>
    </>
  );
};

export default AppHeader;
