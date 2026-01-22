



import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import styles from "./Login.module.css";

const Login = () => {
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [role, setRole] = useState("user");

  const handleLogin = () => {
    if (!username.trim()) return;

    login(username, role);

    if (role === "admin") {
      navigate("/admin");
    } else {
      navigate("/dashboard");
    }
  };

  return (
    <div className={styles.background}>
      {/* Blurred background shapes */}
      <div className={styles.blob1}></div>
      <div className={styles.blob2}></div>

      {/* Login Card */}
      <div className={styles.card}>
        <h2 className="text-2xl font-semibold text-white text-center">
          Welcome Back
        </h2>
        <p className="text-sm text-gray-200 text-center mt-1 mb-6">
          Sign in to continue
        </p>

        {/* Username */}
        <div className="mb-4">
          <label className="block text-sm text-gray-200 mb-1">
            Username
          </label>
          <input
            type="text"
            placeholder="Enter username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full px-4 py-2 rounded-xl
                       bg-white/20 text-white placeholder-gray-300
                       border border-white/30
                       focus:outline-none focus:ring-2 focus:ring-indigo-400
                       transition"
          />
        </div>

        {/* Role */}
        <div className="mb-6">
          <label className="block text-sm text-gray-200 mb-1">
            Role
          </label>
          <select
            value={role}
            onChange={(e) => setRole(e.target.value)}
            className="w-full px-4 py-2 rounded-xl
                       bg-white/20 text-white
                       border border-white/30
                       focus:outline-none focus:ring-2 focus:ring-indigo-400
                       transition"
          >
            <option value="user" className="text-black">User</option>
            <option value="admin" className="text-black">Admin</option>
          </select>
        </div>

        {/* Button */}
        <button
          onClick={handleLogin}
          className="w-full py-3 rounded-xl
                     bg-indigo-500 hover:bg-indigo-600
                     text-white font-semibold
                     transition-all duration-300
                     hover:-translate-y-1 hover:shadow-xl
                     active:translate-y-0"
        >
          Login
        </button>
      </div>
    </div>
  );
};

export default Login;
