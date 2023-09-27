import React from "react";
import "./Buttons.scss";

export const Buttons = ({ name }) => {
  console.log(name);
  return <button className="btn btn__secondary">{name}</button>;
};
