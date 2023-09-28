import { useState } from "react";
import supabase from "../config/supabaseClient";
import "./Create.scss";
import { Buttons } from "./Buttons";
import whatsapp from "../assets/whatsapp.svg";
import tel from "../assets/tel.svg";

const Create = ({ setToggle }) => {
  const [prezime, setPrezime] = useState("");
  const [ime, setIme] = useState("");
  const [brojClanova, setBrojClanova] = useState("");
  const [formError, setFormError] = useState(null);
  const [submited, setSubmited] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!prezime || !brojClanova || !ime) {
      setFormError("Molimo popunite sva polja.");
      setSubmited(false);
      return;
    }

    const { data, error } = await supabase
      .from("krstenje_final")
      .insert([{ prezime, ime, brojClanova }]);
    setSubmited(true);
    setTimeout(() => {
      setToggle(false);
    }, 3000);

    if (error) {
      console.log(error);
      setTimeout(() => {
        setFormError("Molimo popunite sva polja.");
      }, 2000);
      setSubmited(false);
    }
    if (data) {
      console.log(data);
      setFormError(null);
    }

    setTimeout(() => {
      setSubmited(false);
      console.log(submited, "Tiemout");
    }, 2000);

    setIme("");
    setPrezime("");
    setBrojClanova("");
  };

  return (
    <div className="pageCreate">
      <form onSubmit={handleSubmit} className="form-wrapper">
        <div className="group">
          <input
            type="text"
            id="ime"
            value={ime}
            onChange={(e) => {
              setIme(e.target.value);
              setFormError(null);
            }}
          />
          <span class="highlight"></span>
          <span class="bar"></span>
          <label htmlFor="ime">Ime:</label>
        </div>
        <div className="group">
          <input
            type="text"
            id="prezime"
            value={prezime}
            onChange={(e) => {
              setPrezime(e.target.value);
              setFormError(null);
            }}
          />
          <span class="highlight"></span>
          <span class="bar"></span>
          <label htmlFor="prezime">Prezime:</label>
        </div>
        <div className="group">
          <input
            type="number"
            id="brojClanova"
            value={brojClanova <= 0 ? "" : brojClanova}
            onChange={(e) => {
              if (e.target.value <= 0) {
                return;
              }
              setBrojClanova(e.target.value);
              setFormError(null);
            }}
          />
          <span class="highlight"></span>
          <span class="bar"></span>
          <label htmlFor="brojClanova">Broj članova koji dolaze:</label>
        </div>
        <Buttons
          name="Potvrdi dolazak"
          submited={submited}
          setSubmited={setSubmited}
        />
        {formError ? <p className="error">{formError}</p> : <></>}
        <hr></hr>
        <div className="social-media-wrapper">
          <a href="https://wa.me/385917699031">
            <img
              src={whatsapp}
              alt="whatsapp"
              className="social-icon"
              width={10}
            />
          </a>
          <a href="tel: +385917699031">
            <img src={tel} alt="tel" className="social-icon" />
          </a>
        </div>
      </form>
    </div>
  );
};

export default Create;
