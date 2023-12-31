import React, { useState } from "react";
import "./LoaderIme.scss";

export const LoaderIme = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const copy = "Emanuelovo";

  return (
    <span>
      {copy.split("").map(function (char, index) {
        let style = { animationDelay: 0.5 + index / 40 + "s" };

        return (
          <span
            className="spanich"
            aria-hidden="true"
            key={index}
            id={index}
            style={style}
          >
            {char}
          </span>
        );
      })}
    </span>
  );
};
