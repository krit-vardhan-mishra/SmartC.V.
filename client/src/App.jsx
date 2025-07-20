import { Outlet } from "react-router-dom";

import ScrollToTop from "./util/Scroll";
import Navbar from "./global/Header";
import Footer from './global/Footer';



const App = () => {
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <main className="min-h-screen">
        <Outlet />
      </main>
      <Footer/>
    </>
  );
};

export default App;
