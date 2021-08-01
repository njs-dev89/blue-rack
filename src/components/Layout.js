import React from "react";
import TopBar from "./TopBar/TopBar";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/other/aos.css";
import "../styles/other/animate.css";
import "../styles/style.css";
import "../styles/responsive.css";
import Footer from "./Footer";
import MainNavbar from "./MainNavbar/MainNavbar";

export default function Layout({ children }) {
  return (
    <>
      <TopBar />

      <MainNavbar />
      {children}
      <Footer />
    </>
  );
}
