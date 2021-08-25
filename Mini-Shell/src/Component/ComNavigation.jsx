import React from "react";
import "./styling.css";
import logo from "../images/logo.png";

const ComNavigation = ({ value }) => {
  return (
    <>
      <div className="div_Navigation">
        <button
          className="logo"
          onClick={() => {
            value.setKategorie("homepage");
            value.setHintergrundFarbe("white");
          }}
        >
          <img src={logo} alt="AHK" width="100%" height="105px" />
        </button>
        <button className="NEUES">
          <h4>NEUES</h4>
        </button>
        <button className="DIE_AHK">
          <h4>DIE AHK </h4>
        </button>
        <button
          className="KLETTERN"
          onClick={() => {
            value.setKategorie("klettern");
            value.setHintergrundFarbe("rgba(76, 102, 248, 0.2)");
          }}
        >
          <h4>KLETTERN</h4>
        </button>
        <button
          className="ARTISTIK"
          onClick={() => {
            value.setKategorie("artistik");
            value.setHintergrundFarbe("rgba(245, 106, 56, 0.2)");
          }}
        >
          <h4>ARTISTIK</h4>
        </button>
        <button
          className="HALLE59"
          onClick={() => {
            value.setKategorie("halle59");
            value.setHintergrundFarbe("rgba(167, 54, 54, 0.2)");
          }}
        >
          <h4>HALLE59</h4>
        </button>
        <button className="TRAILS59">
          <h4>TRAILS59</h4>
        </button>
        <button
          className="TRIAL"
          onClick={() => {
            value.setKategorie("trial");
            value.setHintergrundFarbe("rgba(115, 238, 115, 0.2)");
          }}
        >
          <h4>TRIAL</h4>
        </button>
        <button className="KONTAKT">
          <h4>KONTAKT</h4>
        </button>
        <button className="SHOP">
          <h4>SHOP</h4>
        </button>
      </div>
    </>
  );
};

export default ComNavigation;
