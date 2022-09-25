import LoaderIcon from "../assets/loader.svg";
import LOGO from "../assets/logo-svg.svg";
const Loader = () => {
  return (
    <div className="preloader flex justify-center items-center flex-col z-40 min-h-screen w-full bg-gray-800 fixed top-0 transition ease-in-out duration-800">
      <div className="logo mb-8">
        <img src={LOGO} alt="Omkar khatavkar" width={80} height={80} />
      </div>
      <div className="animated_logo">
        <img src={LoaderIcon} alt="" width={80} height={80} />
      </div>
    </div>
  );
};

export default Loader;
