import React from "react";
import "./Buttons.scss";
import { LoaderIme2 } from "./LoaderIme2";

export const Buttons = ({ name, submited }) => {
  return (
    <button className="btn btn__secondary">
      {submited ? <LoaderIme2 /> : name}
    </button>
  );
};
