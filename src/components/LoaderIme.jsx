import React, { useState } from "react";
import "./LoaderIme.scss";

export const LoaderIme = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const copy = "Emanuelovo";

  /*   console.log(lastItem, "last");
 
  console.log(
    copy.split("").map((car, index) => {
      console.log(car);
    })
  ); */
  /*   setTimeout(function () {
    setIsLoaded(true);
  }, 7500);
  if (isLoaded) {
    return <Navigate to="/" replace />;
  } */
  return (
    <span>
      {copy.split("").map(function (char, index) {
        let style = { animationDelay: 0.5 + index / 40 + "s" };
        /*         const lastItem2 = copy.length - 1;
        console.log(lastItem2, "last");
        if (lastItem2 === index) {
          return <Navigate to="/" replace />;
        } */
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
