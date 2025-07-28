import React from "react";
import { Outlet, Link } from "react-router-dom";
import Navbar from "./global/Header";
import Footer from "./global/Footer";

export default function App() {
  return (
    <div>
      <Navbar />
      <main className="p-6">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
