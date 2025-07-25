import { Outlet } from "react-router-dom";

import ScrollToTop from "./util/Scroll";
import Navbar from "./components/Navbar"; 
import Footer from './global/Footer';

const App = () => {
  return (
    <>
      <ScrollToTop />
      <Navbar />   {/*Shows the new responsive Tailwind Navbar */}
      <main className="min-h-screen px-6 py-4">
        <Outlet /> {/*This renders the routed page */}
      </main>
      <Footer />
    </>
  );
};

export default App;
