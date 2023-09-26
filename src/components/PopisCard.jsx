import React from "react";

export const PopisCard = ({ pop }) => {
  if (pop.obitelj[0] === null) {
    pop.obitelj.shift();
  }

  return (
    <div className="smoothie-card">
      <h3>{pop.prezime}</h3>
      <p>{pop.brojClanova}</p>
      <div className="rating">
        {pop.obitelj.map((ob) => {
          return (
            <div className="clan" key={ob.ime + Date.now()}>
              <div>{ob.ime}</div><div>{ob.godine}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
