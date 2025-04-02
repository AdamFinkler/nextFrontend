import React, { useState, useEffect } from "react";
import TopRated from "../topRated/TopRated";
import "./styles.css";
import Recommended from "../recommended/Recommended";

const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const [isTabletOrMobile, setIsTabletOrMobile] = useState(
    window.innerWidth <= 768
  );

  const handleCloseMenu = () => {
    setIsOpen(false);
  };

  const menuFeatures = [
    {
      key: "topRated",
      content: <TopRated handleCloseMenu={handleCloseMenu} />,
    },
    {
      key: "recommended",
      content: <Recommended handleCloseMenu={handleCloseMenu} />,
    },
  ];

  useEffect(() => {
    const handleResize = () => {
      setIsTabletOrMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  if (!isTabletOrMobile) return null;

  return (
    <div className="hamburger-menu">
      <button className="hamburger-button" onClick={() => setIsOpen(!isOpen)}>
        <span className="bar" />
        <span className="bar" />
        <span className="bar" />
      </button>

      {isOpen && (
        <div className="menu-content">
          {menuFeatures.map((item, index) => (
            <div key={item.key}>
              <div className="menu-item">{item.content}</div>

              {index !== menuFeatures.length - 1 && (
                <hr className="menu-divider" />
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default HamburgerMenu;
