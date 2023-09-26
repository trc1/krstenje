import "./App.css";
import Create from "./components/Create";
import { Loader } from "./components/Loader";
import { PopisCard } from "./components/PopisCard";
import supabase from "./config/supabaseClient";
import { useEffect, useState } from "react";
import { Event } from "./components/Event";

function App() {
  const [fetchError, setFetchError] = useState(null);
  const [popis, setPopis] = useState([]);
  const [loader, setLoader] = useState(false);

  useEffect(() => {
    const fetchPopis = async () => {
      const { data, error } = await supabase.from("popis").select();

      if (error) {
        setFetchError("Could not fetch the smoothies");
        setPopis([]);
      }
      if (data) {
        setPopis(data);
        setFetchError(null);
      }
    };

    fetchPopis();
  }, []);

  setTimeout(() => {
    setLoader(true);
  }, 4000);

  console.log(popis);

  return (
    <>
      {!loader ? (
        <Loader />
      ) : (
        <>
          <Event />
        </>
      )}
    </>
  );
}

export default App;
