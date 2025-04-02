import { useEffect, useState } from "react";
import banner from "../../assets/banner.png";
import Search from "../../common-components/search/Search";
import HamburgerMenu from "./hamburgerMenu/HamburgerMenu";
import Recommended from "./recommended/Recommended";
import "./styles.css";
import TopRated from "./topRated/TopRated";

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
