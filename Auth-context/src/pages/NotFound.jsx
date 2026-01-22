import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="h-screen flex flex-col justify-center items-center text-center">
      <h1 className="text-6xl font-bold mb-4">404</h1>
      <p className="text-xl mb-6">Page Not Found</p>

      <Link
        to="/"
        className="bg-black text-white px-4 py-2 rounded"
      >
        Go to Home
      </Link>
    </div>
  );
};

export default NotFound;
