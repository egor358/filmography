import "./App.css";
import { Box, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { Preloader } from "./components/preloader/Preloader";
import { CardList } from "./components/cardList/CardList";
import { useSearch } from "./components/context/mainContext";
import axios from "axios";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
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
  const [actions, setActions] = useState([]);
  const [comedy, setComedy] = useState([]);

  useEffect(() => {
    const getComedy = async () => {
      try {
        setLoading(true);
        setError("");
        const res = await axios.get(
          "https://watchit-api.onrender.com/shows/byGenre/comedy",
        );
        setComedy(res.data);
        console.log(res.data);
      } catch (error) {
        console.log(error);
        setError("Не удалось загрузить comedy shows");
      } finally {
        setLoading(false);
      }
    };
    getComedy();
  }, []);

  useEffect(() => {
    const getAction = async () => {
      try {
        setLoading(true);
        setError("");
        const res = await axios.get(
          "https://watchit-api.onrender.com/shows/byGenre/action",
        );
        setActions(res.data);
        console.log(res.data);
      } catch (error) {
        console.log(error);
        setError("Не удалось загрузить action shows");
      } finally {
        setLoading(false);
      }
    };
    getAction();
  }, []);

  useEffect(() => {
    const getPopular = async () => {
      try {
        setLoading(true);
        setError("");
        const saveToken = localStorage.getItem("token");
        const res = await axios.get(
          "https://watchit-api.onrender.com/shows/popular",
          {
            headers: {
              Authorization: `Bearer ${saveToken}`,
            },
          },
        );

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
          `https://watchit-api.onrender.com/shows?q=${search}`,
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
      {error && (
        <Typography color="error" sx={{ pl: 4 }}>
          {error}
        </Typography>
      )}

      {search.trim() ? (
        <CardList films={films} handleCardId={handleCardId} />
      ) : (
        <>
          {popular.length > 0 ? (
            <Box sx={{ mb: 1, px: 7 }}>
              <Typography variant="h4" sx={{ mb: 3, pl: 4 }}>
                Popular Shows
              </Typography>

              <Swiper
                modules={[Navigation, Autoplay]}
                spaceBetween={20}
                slidesPerView={4}
                navigation
                autoplay={{ delay: 5000, disableOnInteraction: false }}
                loop={true}
                style={{
                  width: "100%",
                }}
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

          {comedy.length > 0 && (
            <Box sx={{ mb: 8, px: 7 }}>
              <Typography variant="h4" sx={{ mb: 3, pl: 4 }}>
                Comedy Shows
              </Typography>

              <Swiper
                modules={[Navigation, Autoplay]}
                spaceBetween={20}
                slidesPerView={4}
                navigation
                autoplay={{ delay: 5000, disableOnInteraction: false }}
                loop={true}
                style={{
                  width: "100%",
                  "--swiper-navigation-sides-offset": "0px",
                }}
              >
                {comedy.map((show) => (
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
          )}

          {actions.length > 0 && (
            <Box sx={{ mb: 8, px: 7 }}>
              <Typography variant="h4" sx={{ mb: 3, pl: 4 }}>
                Action Shows
              </Typography>

              <Swiper
                modules={[Navigation, Autoplay]}
                spaceBetween={20}
                slidesPerView={4}
                navigation
                autoplay={{ delay: 5000, disableOnInteraction: false }}
                loop={true}
                style={{
                  width: "100%",
                  "--swiper-navigation-sides-offset": "0px",
                }}
              >
                {actions.map((show) => (
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
          )}
        </>
      )}
    </Box>
  );
}

export default App;
