import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="min-h-screen bg-[#020617] flex flex-col items-center justify-center text-center px-6">
      {/* 404 */}
      <h1 className="text-7xl font-extrabold text-indigo-500 drop-shadow-lg">
        404
      </h1>

      {/* Message */}
      <p className="text-2xl text-gray-300 mt-4">
        Page Not Found
      </p>

      <p className="text-gray-400 mt-2 max-w-md">
        Sorry, the page you are looking for does not exist or has been moved.
      </p>

      {/* Button */}
      <Link
        to="/"
        className="mt-8 inline-block px-6 py-3 rounded-xl
                   bg-indigo-600 hover:bg-indigo-700
                   text-white font-semibold
                   transition-all duration-300
                   hover:-translate-y-1 hover:shadow-xl"
      >
        Go to Home
      </Link>
    </div>
  );
};

export default NotFound;

