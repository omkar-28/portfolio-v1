/* This example requires Tailwind CSS v2.0+ */
import { useEffect } from "react";
import { useState } from "react";
import About from "./component/About";
import AppHeader from "./component/AppHeader";
import Experience from "./component/Experience";
import Footer from "./component/Footer";
import HeroBanner from "./component/HeroBanner";
import Loader from "./component/loader";
import Repos from "./component/Repos";

function App() {
  const [loading, setloading] = useState(true);

  useEffect(() => {
    let timer;
    const root = window.document.documentElement;
    loading && root.classList.add("overflow-hidden");
    timer = setTimeout(() => {
      root.classList.remove("overflow-hidden");
      setloading(false);
    }, 3000);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <>
      {loading && <Loader />}
      <div className={`main text-slate-600 dark:text-slate-500 bg-slate-100 dark:bg-gray-800 min-h-screen font-inter transition ease-in-out duration-500 ${loading && ""}`}>
        <AppHeader />
        <div className="container mx-auto px-4 max-w-6xl">
          <HeroBanner />
          <About />
          <Experience />
          <Repos />
          <Footer />
        </div>
      </div>
    </>
  );
}

export default App;
