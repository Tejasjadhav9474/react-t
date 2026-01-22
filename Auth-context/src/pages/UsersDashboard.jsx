import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

const UsersDashboard = () => {
  const { user } = useContext(AuthContext);

  return (
    <div>
      <h1 className="text-3xl font-bold">User Dashboard</h1>
      <p className="mt-2">Welcome, <b>{user?.name}</b></p>
    </div>
  );
};

export default UsersDashboard;

