import "./App.css";
import { Box, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { Preloader } from "./components/preloader/Preloader";
import { CardList } from "./components/cardList/CardList";
import { useSearch } from "./components/context/mainContext";
import axios from "axios";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import TitleSingleSlide from "./components/title_sinle_slide/TitleSingleSlide";
function App() {
  const handleCardId = (id) => {
    console.log(id);
  };
  const { search } = useSearch();

  const [films, setFilms] = useState([]);
  const [popular, setPopular] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  
  useEffect(() => {
    const getPopular = async () => {
      try {
        setLoading(true);
        setError("");

        const res = await axios.get("https://watchit-api.onrender.com/shows/popular");

        setPopular(res.data);
        console.log("Popular загружены:", res.data);
      } catch (error) {
        console.error("Ошибка popular:", error);
        setError("Не удалось загрузить популярные шоу");
      } finally {
        setLoading(false);
      }
    };
    getPopular();
  }, []);

  useEffect(() => {
    const getFilms = async () => {
      try {
        setLoading(true);
        setError("");

        const response = await fetch(
          `https://watchit-api.onrender.com/shows?q=${search}`
        );
        if (!response.ok) {
          setError("something went wrong");
          return;
        }
        const data = await response.json();
        setFilms(data);
        console.log("Поиск:", data);
      } catch (error) {
        console.error(error);
        setError("Ошибка поиска");
      } finally {
        setLoading(false);
      }
    };
    getFilms();
  }, [search]);

  if (loading) return <Preloader />;

  return (
    <Box sx={{ bgcolor: "black", color: "white", minHeight: "100vh" }}>
      {popular.length > 0 ? (
        <Box sx={{ mb: 8 }}>
          <Typography variant="h4" sx={{ mb: 3, pl: 4 }}>
            Popular Shows
          </Typography>

          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={0}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            loop={true}
            style={{ height: "70vh", width: "100%" }}
          >
            {popular.map((show) => (
              <SwiperSlide key={show.id}>
                <TitleSingleSlide
                  id={show.id}
                  name={show.name}
                  image={show.image?.original || show.image?.medium}
                  time={show.schedule?.time}
                  premiered={show.premiered}
                  runtime={show.runtime}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </Box>
      ) : (
        <Typography sx={{ pl: 4, py: 4 }}>
          Популярные шоу загружаются...
        </Typography>
      )}

      {error ? (
        <Typography color="error" sx={{ pl: 4 }}>
          {error}
        </Typography>
      ) : (
        <CardList films={films} handleCardId={handleCardId} />
      )}
    </Box>
  );
}

export default App;