import React from "react";
import { Outlet, Link } from "react-router-dom";

export default function App() {
  return (
    <div>
      <nav className="p-4 bg-gray-100">
        <Link to="/" className="mr-4">Home</Link>
        <Link to="/skill-match">Skill Match</Link>
        {/* add other nav links as needed */}
      </nav>
      <main className="p-6">
        <Outlet />
      </main>
    </div>
  );
}
