import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./global/Header";
import Footer from "./global/Footer";

export default function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <main className="flex-grow p-6">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
}
