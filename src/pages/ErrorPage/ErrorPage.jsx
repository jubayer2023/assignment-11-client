import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="max-w-screen-md mx-auto h-[90vh] flex items-center justify-center flex-col">
      <div className="flex justify-between items-center shadow-lg p-5">
        <h3 className="text-red-700 text-[100px] mr-8 pr-8 text-center font-bebasNeue border-r-2 border-gray-400 ">
          404
        </h3>
        <p className="text-red-700 text-xl font-bold">Page Not Found!!!</p>
      </div>
      <Link to={"/"}>
        <button className="text-sm font-semibold text-white bg-pink-500 px-5 py-2 rounded-md btn-outline mt-5">
          Go home
        </button>
      </Link>
    </div>
  );
};

export default ErrorPage;
