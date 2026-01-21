import React, { useEffect, useRef } from "react";
import Parallax from "parallax-js";
import "./notfound.css"; // external CSS

const NotFound = () => {
  const sceneRef = useRef(null);

  useEffect(() => {
    new Parallax(sceneRef.current);
  }, []);

  return (
    <div className="min-h-screen bg-[#695681] flex items-center justify-center overflow-hidden">

      {/* External CSS driven elements */}
      <div
        ref={sceneRef}
        className="scene relative w-full h-screen"
        data-hover-only="false"
      >
        <div className="circle"></div>

        <p className="p404">404</p>
        <p className="p404 blur">404</p>
      </div>

      {/* Tailwind layout */}
      <div className="absolute bottom-24 text-center text-white">
        <p className="text-lg mb-6">
          Uh oh! Looks like you got lost.
        </p>

        <button
          className="px-6 py-2 rounded-full bg-white text-purple-700 font-semibold
                     hover:bg-pink-400 hover:text-white transition"
          onClick={() => window.location.href = "/"}
        >
          I dare!
        </button>
      </div>
    </div>
  );
};

export default NotFound;
