import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const linkStyle = ({ isActive }) =>
    isActive
      ? "text-yellow-400 border-b-2 border-yellow-400"
      : "text-white";

  return (
    <nav className="bg-black text-white px-6 py-4">
      
      {/* Top bar */}
      <div className="flex justify-between items-center">
        <h1 className="text-xl font-bold">MyApp</h1>

        {/* Hamburger button (mobile only) */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>

        {/* Desktop menu */}
        <div className="hidden md:flex gap-6">
          <NavLink to="/" end className={linkStyle}>Home</NavLink>
          <NavLink to="/about" className={linkStyle}>About</NavLink>
          <NavLink to="/services" className={linkStyle}>Services</NavLink>
          <NavLink to="/contact" className={linkStyle}>Contact</NavLink>
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
        </div>
      )}
    </nav>
  );
};

export default Navbar;
