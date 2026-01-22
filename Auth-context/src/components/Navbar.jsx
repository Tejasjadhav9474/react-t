import { useState, useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const { user, logout } = useContext(AuthContext);

  const linkStyle = ({ isActive }) =>
    isActive
      ? "text-yellow-400 border-b-2 border-yellow-400"
      : "text-white hover:text-yellow-300";

  return (
    <nav className="bg-black text-white px-6 py-4">
      {/* Top bar */}
      <div className="flex justify-between items-center">
        {/* Logo */}
        <h1 className="text-xl font-bold">MyApp</h1>

        {/* Hamburger (mobile) */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>

        {/* Desktop menu */}
        <div className="hidden md:flex gap-6 items-center">
          <NavLink to="/" end className={linkStyle}>Home</NavLink>
          <NavLink to="/about" className={linkStyle}>About</NavLink>
          <NavLink to="/services" className={linkStyle}>Services</NavLink>
          <NavLink to="/contact" className={linkStyle}>Contact</NavLink>

          {user ? (
            <>
              <span className="ml-4">Hi, {user.name}</span>
              <button
                onClick={logout}
                className="ml-2 bg-red-500 px-3 py-1 rounded"
              >
                Logout
              </button>
            </>
          ) : (
            <NavLink to="/login" className={linkStyle}>Login</NavLink>
          )}
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="flex flex-col gap-4 mt-4 md:hidden">
          <NavLink to="/" end className={linkStyle} onClick={() => setOpen(false)}>
            Home
          </NavLink>
          <NavLink to="/about" className={linkStyle} onClick={() => setOpen(false)}>
            About
          </NavLink>
          <NavLink to="/services" className={linkStyle} onClick={() => setOpen(false)}>
            Services
          </NavLink>
          <NavLink to="/contact" className={linkStyle} onClick={() => setOpen(false)}>
            Contact
          </NavLink>

          {user ? (
            <button
              onClick={() => {
                logout();
                setOpen(false);
              }}
              className="bg-red-500 px-3 py-1 rounded"
            >
              Logout
            </button>
          ) : (
            <NavLink
              to="/login"
              className={linkStyle}
              onClick={() => setOpen(false)}
            >
              Login
            </NavLink>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
