import { useState, useEffect } from "react";

export const useResize = () => {
  const [width, setWidth] = useState(window.innerWidth);
  useEffect(() => {
    const handleResize = (event) => {
      setTimeout(() => {
        setWidth(event.target.innerWidth);
      }, 0);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return {
    width,
    isScreenLg: width > 767,
    isScreenXlg: width > 1200,
  };
};