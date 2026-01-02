import "./App.css";
import ResponsiveAppBar from "./components/menu/Menu";
import { Box } from "@mui/system";
import { Footer } from "./components/footer/Footer";
import { useEffect, useState } from "react";
import { Preloader } from "./components/preloader/Preloader";
import { CardList } from "./components/cardList/CardList";

function App() {
  const handleCardId = (id) => {
    console.log(id);
  };
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
      }finally{
        setLoading(false)
      }
    };
    getFilms();
  }, []);

  return (
    
    <Box
      sx={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <ResponsiveAppBar />
      {loading ? (
        <Preloader />
      ) : (
        <>
         <CardList films={films} handleCardId={handleCardId}/>
        </>
      )}
      <Footer />
    </Box>
      
      
  );

}

export default App;
