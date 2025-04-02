import React, { useState, useEffect } from "react";
import banner from "../../assets/banner.png";
import TopRated from "./topRated/TopRated";
import Search from "../../common-components/search/Search";
import "./styles.css";
import HamburgerMenu from "./hamburgerMenu/HamburgerMenu";
import Recommended from "./recommended/Recommended";

const TopBar = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const isDesktop = windowWidth > 768;

  return (
    <div className="layout-top-bar">
      <img className="banner" src={banner} alt="Banner" />
      <div className="right-toolbar-container">
        {isDesktop && (
          <>
            <TopRated />
            <Recommended />
          </>
        )}
        <HamburgerMenu />
        <Search />
      </div>
    </div>
  );
};

export default TopBar;
