// ScrollToTop.jsx
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"  // Optional: use "auto" for instant scroll
    });
  }, [pathname]);

  return null;
};

export default ScrollToTop;
