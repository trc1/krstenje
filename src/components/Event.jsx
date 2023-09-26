import React from "react";
import "./Event.scss";
import { LoaderIme } from "./LoaderIme";
import beba from "../assets/emi.png";
import { LocationCard } from "./LocationCard";

export const Event = () => {
  return (
    <div className="event-wrapper">
      <img className="event-img" src={beba} alt="Slika" />
      <div className="name-wrapper">
        <h2>Pozivamo Vas na</h2>
        <LoaderIme />
        <h2>Krštenje</h2>
        <p>22.10.2023.</p>
      </div>
      <LocationCard />
      <button className="button-form">Potvrdite svoj dolazak</button>
    </div>
  );
};
