import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

const Dashboard = () => {
  const { user } = useContext(AuthContext);

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold">Dashboard</h1>
      <p className="mt-2">
        Welcome, <span className="font-semibold">{user?.name}</span>
      </p>
    </div>
  );
};

export default Dashboard;
