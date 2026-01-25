import { useParams } from "react-router";
import { useEffect, useState } from "react";
import { Preloader } from "../preloader/Preloader";
import { SingleItemHeader } from "./singleItemHeader/SingleItemHeader";
import { Box } from "@mui/material";
import { SingleItemTabs } from "./singleItemTabs/SingleItemTabs";
import { ActorList } from "./actorItem/ActorList";
export const Show = () => {
  const { id } = useParams();
  const [film, setFilm] = useState({});
  const [cast, setCast] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  useEffect(() => {
    const getShow = async () => {
      try {
        setLoading(true);
        const response = await fetch(
          `https://watchit-api.onrender.com/shows/${id}`
        );
        if (!response.ok) {
          setError("somthing went wrong");
          return;
        }
        const data = await response.json();
        // console.log(data);

        setFilm(data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    getShow();
  }, [id]);

  useEffect(() => {
    const getCasts = async () => {
      try {
        setLoading(true);
        const response = await fetch(
          `https://watchit-api.onrender.com/shows/${id}/cast`
        );
        if (!response.ok) {
          setError("somthing went wrong");
          return;
        }
        const data = await response.json();
        console.log(data);
        
        setCast(data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    getCasts()
  },[id]);

  return (
    <Box>
      {loading ? (
        <Preloader />
      ) : (
        <>
          <SingleItemHeader film={film} />
          <SingleItemTabs
            description={film.summary}
            series={film.series}
            premiered={film.premiered}
            rating={film.rating}
          />
          <ActorList cast={cast}/>
        </>
      )}
    </Box>
  );
};
