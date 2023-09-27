import React from "react";
import "./LoaderIme2.scss";

export const LoaderIme2 = () => {
  const copy2 = "Hvala!";

  return (
    <span>
      {copy2.split("").map(function (char, index) {
        let style = { animationDelay: 0.5 + index / 40 + "s" };

        return (
          <span
            className="spanich2"
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
