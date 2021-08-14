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
            value.setPfad("homepage");
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
            value.setPfad("klettern");
            value.setHintergrundFarbe("rgba(76, 102, 248, 0.945)");
          }}
        >
          <h4>KLETTERN</h4>
        </button>
        <button
          className="ARTISTIK"
          onClick={() => {
            value.setPfad("artistik");
            value.setHintergrundFarbe("rgb(245, 106, 56)");
          }}
        >
          <h4>ARTISTIK</h4>
        </button>
        <button
          className="HALLE59"
          onClick={() => {
            value.setPfad("halle59");
            value.setHintergrundFarbe("brown");
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
            value.setPfad("trial");
            value.setHintergrundFarbe("rgb(115, 238, 115)");
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
