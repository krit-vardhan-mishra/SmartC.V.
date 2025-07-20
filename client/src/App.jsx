import { Outlet } from "react-router-dom";

import ScrollToTop from "./util/Scroll";
import Navbar from "./global/Header";

const App = () => {
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <main className="min-h-screen">
        <Outlet />
      </main>
      
    </>
  );
};

export default App;
