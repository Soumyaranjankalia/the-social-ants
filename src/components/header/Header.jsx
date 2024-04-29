import React from "react";
import "./Header.css";

export const Header = () => {
  return (
    <div style={{ background: "rgb(31,6,43)", width: "100%", height: "160px",paddingTop:'2px' }}>
      <div className="headerContainer">
        <div className="headerLogo">
          <img
            className="logo"
            src="https://thesocialants.com/wp-content/uploads/2023/11/socialants_glow.png"
            alt=""
          />
        </div>
        <div className="headerButton">
          <button>
          <img width="15" height="15" src="https://img.icons8.com/ios-filled/50/menu--v6.png" alt="menu--v6"/>
          </button>
        </div>
      </div>
    </div>
  );
};
