import { useState } from "react";
import supabase from "../config/supabaseClient";

const Create = () => {
  const [prezime, setPrezime] = useState("");
  const [brojClanova, setBrojClanova] = useState("");
  const [obitelj, setObitelj] = useState([]);
  const [formError, setFormError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!prezime || !brojClanova) {
      setFormError("Please fill in all the fields correctly.");
      return;
    }

    const { data, error } = await supabase
      .from("popis")
      .insert([{ prezime, brojClanova, obitelj }]);

    if (error) {
      console.log(error);
      setFormError("Please fill in all the fields correctly.");
    }
    if (data) {
      console.log(data);
      setFormError(null);
    }

    setObitelj([]);
    setPrezime("");
    setBrojClanova("");
  };

  const arrayRange = (start, stop, step) =>
    Array.from(
      { length: (stop - start) / step + 1 },
      (value, index) => start + index * step
    );
  let range = arrayRange(1, brojClanova, 1);

  const handleFamilyMemberChange = (index, fieldName, value) => {
    const updatedObitelj = [...obitelj];
    updatedObitelj[index] = {
      ...updatedObitelj[index],
      [fieldName]: value,
    };

    setObitelj(updatedObitelj);
    const firstInObitelj = obitelj[0];
    if (firstInObitelj === undefined) {
      obitelj.shift();
    }
  };

  return (
    <div className="page create">
      <form onSubmit={handleSubmit}>
        <label htmlFor="title">Prezime:</label>
        <input
          type="text"
          id="title"
          value={prezime}
          onChange={(e) => setPrezime(e.target.value)}
        />

        <label htmlFor="rating">Broj članova:</label>
        <input
          type="number"
          id="rating"
          value={brojClanova}
          onChange={(e) => setBrojClanova(e.target.value)}
        />
        {range.map((index) => (
          <div key={index}>
            <label>Ime</label>
            <input
              type="text"
              onChange={(e) => {
                handleFamilyMemberChange(index, "ime", e.target.value);
              }}
            />
            <label>Godine</label>
            <input
              type="text"
              onChange={(e) => {
                handleFamilyMemberChange(index, "godine", e.target.value);
              }}
            />
          </div>
        ))}

        <button>Submit</button>

        {formError && <p className="error">{formError}</p>}
      </form>
    </div>
  );
};

export default Create;
