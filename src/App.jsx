import "./App.css";
import { Box } from "@mui/system";
import { useEffect, useRef, useState } from "react";
import { Preloader } from "./components/preloader/Preloader";
import { CardList } from "./components/cardList/CardList";
import { useSearch } from "./components/context/mainContext";

function App() {
  const handleCardId = (id) => {
    console.log(id);
  };
  const {search} = useSearch() 
  const [films, setFilms] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const getFilms = async () => {
      try {
        setLoading(true);
        const response = await fetch(
          "https://watchit-api.onrender.com/shows?amount=10"
        );
        if (!response.ok) {
          setError("somthing went wrong");
          return;
        }
        const data = await response.json();
        console.log(data);

        setFilms(data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    getFilms();
  }, []);

const filterFilms = films.filter(fil =>
  fil.name.toLowerCase().includes(search.trim()) 
)

  return (
    <Box>
      {}
      {loading ? (
        <Preloader />
      ) : (
        <CardList films={filterFilms} handleCardId={handleCardId} />
      )}
    </Box>
  );
}

export default App;
