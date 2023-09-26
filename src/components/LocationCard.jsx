import React, { useState } from "react";
import { Crkva } from "../assets/Crkva";
import { Rucak } from "../assets/Rucak";
import "./LocationCard.scss";

export const LocationCard = () => {
  const [isAcitive, setIsActive] = useState(false);
  const [isAcitive2, setIsActive2] = useState(false);
  const handleMouseEnter = () => {
    setIsActive(true);
  };
  const handleMouseEnter2 = () => {
    setIsActive2(true);
  };
  const handleMouseLeave = () => {
    setIsActive(false);
  };
  const handleMouseLeave2 = () => {
    setIsActive2(false);
  };
  return (
    <div className="location_card_wrapper">
      <div
        className="card"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <Crkva />
        <h3>Župa sv. Ćirila i Metoda Osijek</h3>
        <p>10:30h</p>
        <iframe
          className={!isAcitive ? "karta" : "karta active"}
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2793.9847970196097!2d18.702179876174164!3d45.55063137107544!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x475ce7d73abb6865%3A0x3d01d0af08d31869!2sChurch%20of%20St.%20Cyril%20and%20Methodius!5e0!3m2!1sen!2shr!4v1695753365878!5m2!1sen!2shr"
          allowfullscreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      <div
        className="card"
        onMouseEnter={handleMouseEnter2}
        onMouseLeave={handleMouseLeave2}
      >
        <Rucak />
        <h3>Dvorana Bells</h3>
        <p>13:00h</p>
        <iframe
          className={!isAcitive2 ? "dvorana" : "dvorana active"}
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2793.3318091661267!2d18.66178967617495!3d45.5637656710758!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x475ce70e2e553c6d%3A0x78e623a3541a2ddb!2sDvorana%20Bells!5e0!3m2!1sen!2shr!4v1695754128227!5m2!1sen!2shr"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
};
