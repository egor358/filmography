import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Preloader } from "../../preloader/Preloader";
import  {DescriptionActor}  from "./DescriptionActor";

export const SingleActor = () => {
  const { actorId} = useParams();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [characteristic, setCharacteristic] = useState({});

  useEffect(() => {
    (async () => {
      try {
        setLoading(true);
        const response = await fetch(
          `https://watchit-api.onrender.com/shows/actor/${actorId}`,
        );
        if (!response.ok) {
          setError("Something went wrong");
          return;
        }
        const data = await response.json();
        setCharacteristic(data);
      } catch (error) {
        console.log(error);
        setError("Something went wrong");
      } finally {
        setLoading(false);
      }
    })();
  }, [actorId]);
  console.log(characteristic);

  return (
    <div>
      {loading ? (
        <Preloader />
      ) : error ? (
        <p>{error}</p>
      ) : (
        <DescriptionActor {...characteristic} />
      )}
    </div>
  );
};
