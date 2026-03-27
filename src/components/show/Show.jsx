import { useParams } from "react-router";
import { useEffect, useState } from "react";
import { Preloader } from "../preloader/Preloader";
import { SingleItemHeader } from "./singleItemHeader/SingleItemHeader";
import { Box } from "@mui/material";
import { SingleItemTabs } from "./singleItemTabs/SingleItemTabs";
import { ActorList } from "./actorItem/ActorList";
import axios from "axios";

export const Show = () => {
  const { id } = useParams();
  const [film, setFilm] = useState({});
  const [cast, setCast] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const getShowData = async () => {
      try {
        setLoading(true);
        setError("");

        const [filmResponse, castResponse] = await Promise.all([
          axios.get(`https://watchit-api.onrender.com/shows/${id}`),
          axios.get(`https://watchit-api.onrender.com/shows/${id}/cast`),
        ]);

        setFilm(filmResponse.data);
        setCast(castResponse.data);
      } catch (error) {
        console.log(error);
        setError("Failed to load show");
      } finally {
        setLoading(false);
      }
    };
    getShowData();
  }, [id]);

  return (
    <Box>
      {loading ? (
        <Preloader />
      ) : error ? (
        <p style={{ color: "red", textAlign: "center" }}>{error}</p>
      ) : (
        <>
          <SingleItemHeader film={film} />
          <SingleItemTabs
            description={film.summary}
            series={film.series}
            premiered={film.premiered}
            rating={film.rating}
          />
          <ActorList cast={cast} />
        </>
      )}
    </Box>
  );
};
