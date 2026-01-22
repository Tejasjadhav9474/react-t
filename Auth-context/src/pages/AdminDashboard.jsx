import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import styles from "./Dashboard.module.css";

const AdminDashboard = () => {
  const { user, logout } = useContext(AuthContext);

  return (
    <div className={styles.background}>
      <div className={styles.header}>
        <h1 className="text-3xl font-semibold">
          Admin Dashboard
        </h1>
        <button onClick={logout} className={styles.logout}>
          Logout
        </button>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        <div className={styles.card}>
          <h3 className="text-lg font-semibold text-indigo-400">
            Admin Access
          </h3>
          <p className="text-gray-300 mt-2">
            Welcome <b>{user?.name}</b>
          </p>
        </div>

        <div className={styles.card}>
          <h3 className="text-lg font-semibold text-pink-400">
            User Management
          </h3>
          <p className="text-gray-300 mt-2">
            Manage users & roles.
          </p>
        </div>

        <div className={styles.card}>
          <h3 className="text-lg font-semibold text-green-400">
            System Health
          </h3>
          <p className="text-gray-300 mt-2">
            All systems running.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;


