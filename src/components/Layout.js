import React, { useEffect } from "react";
import TopBar from "./TopBar/TopBar";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/other/aos.css";
import "../styles/other/animate.css";
import "../styles/style.css";
import "../styles/responsive.css";
import Footer from "./Footer";
import MainNavbar from "./MainNavbar/MainNavbar";

export default function Layout({ children }) {
  let AOS;
  useEffect(() => {
    const AOS = require("aos");
    AOS.init();
    if (typeof window !== undefined) {
      console.log(document);
      const navbar = document.querySelector("#navbar");
      console.log(navbar);
      const topBarHeight = document.querySelector("#top-bar").scrollHeight;
      console.log(topBarHeight);
      navbar.classList.add("nav-fall");
      window.addEventListener("scroll", () => {
        console.log(window.scrollY);
        if (window.scrollY >= topBarHeight) {
          navbar.classList.add("nav-raise");
        } else {
          navbar.classList.remove("nav-raise");
          navbar.classList.add("nav-fall");
        }
      });
    }
  }, []);
  useEffect(() => {
    if (AOS) {
      AOS.refresh();
    }
  });
  return (
    <>
      <TopBar />

      <MainNavbar />
      {children}
      <Footer />
    </>
  );
}
