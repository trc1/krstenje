import React, { useState } from "react";
import "./Event.scss";
import { LoaderIme } from "./LoaderIme";
import beba from "../assets/emi.png";
import { LocationCard } from "./LocationCard";
import Create from "./Create";
import { Buttons } from "./Buttons";

export const Event = () => {
  const [toggle, setToggle] = useState(false);

  const handleClick = (e) => {
    setToggle(!toggle);
  };
  const handleToggleClick = () => {
    setToggle(!toggle);
  };
  return (
    <div className="event-wrapper">
      <img className="event-img" src={beba} alt="Slika" />
      <div className="name-wrapper">
        <h2>Pozivamo Vas na</h2>
        <LoaderIme />
        <h2>Krštenje</h2>
        <p className="datum">22.10.2023.</p>
      </div>
      <LocationCard />
      <button className="btn btn__secondary" onClick={handleClick}>
        Potvrdite svoj dolazak
      </button>
      {toggle ? (
        <div className="popup-wrapper">
          <div class="button-wrapper" onClick={handleToggleClick}>
            <a href="#" class="close-button">
              <div class="in">
                <div class="close-button-block"></div>
                <div class="close-button-block"></div>
              </div>
              <div class="out">
                <div class="close-button-block"></div>
                <div class="close-button-block"></div>
              </div>
            </a>
          </div>
          <Create setToggle={setToggle}/>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};
