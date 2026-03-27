import React from "react";
import { Box, Typography, CardMedia } from "@mui/material";
import { RiFacebookFill } from "react-icons/ri";
import { FaTwitter, FaInstagram } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

export const DescriptionActor = ({
  name,
  birthday,
  image,
  country,
  gender,
  summary,
  casts,
}) => {
  const imageActor = image?.original;
  const countryName = country?.name;

  return (
    <Box
      sx={{
        display: "flex",
        gap: "20px",
        maxWidth: "100vw",
        padding: 2,
      }}
    >
      {/* Левая колонка с инфо */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          minHeight: "100vh",
          gap: "10px",
        }}
      >
        <img
          src={imageActor}
          alt={name}
          style={{ width: "210px", height: "300px" }}
        />
        <Typography sx={{ color: "#FEFEFA", fontSize: "30px" }}>
          Personal Info
        </Typography>
        <Box sx={{ display: "flex", color: "#7C0902", gap: "5px" }}>
          <RiFacebookFill />
          <FaTwitter />
          <FaInstagram />
        </Box>
        <Box
          sx={{
            color: "#FEFEFA",
            display: "flex",
            flexDirection: "column",
            gap: "10px",
          }}
        >
          <Box>
            <Typography>Birthday</Typography>
            <Typography>{birthday}</Typography>
          </Box>
          <Box>
            <Typography>Country</Typography>
            <Typography>{countryName}</Typography>
          </Box>
          <Box>
            <Typography>Gender</Typography>
            <Typography>{gender}</Typography>
          </Box>
        </Box>
      </Box>

      {/* Правая колонка с фильмами */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "20px",
          flex: 1,
          minWidth: 0,
           color: "#FEFEFA"
        }}
      >
        <Typography sx={{ fontSize: "40px" }}>{name}</Typography>
        <Typography>{summary}</Typography>
        <Typography sx={{ fontSize: "25px" }}>Acting in</Typography>

        {/* Обертка для Swiper со стрелками */}
        <Box
          sx={{
            position: "relative",
            width: "100%",
            "& .swiper-button-next": { right: 8 },
            "& .swiper-button-prev": { left: 8 },
          }}
        >
          <Swiper
            modules={[Navigation]}
            slidesPerView={4}
            spaceBetween={8}
            navigation
            observer={true}
            observeParents={true}
            style={{ minHeight: 250 }}
             loop={true} 
          >
            {casts?.map((item) => (
              <SwiperSlide key={item.id}>
                <Box
                  sx={{
                    position: "relative",
                    width: "100%",
                    height: 250,
                  }}
                >
                  <CardMedia
                    component="img"
                    image={item.image?.original}
                    alt={item.name}
                    sx={{
                      objectFit: "contain",
                      width: "100%",
                      height: "100%",
                    }}
                  />
                  <Typography
                    sx={{
                      position: "absolute",
                      inset: 0,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "white",
                      textAlign: "center",
                      fontSize: "0.9rem",
                      lineHeight: 1.2,
                      padding: "4px",
                      whiteSpace: "normal",
                      wordBreak: "break-word",
                      overflowWrap: "break-word",
                    }}
                  >
                    {item.name}
                  </Typography>
                </Box>
              </SwiperSlide>
            ))}
          </Swiper>
        </Box>
      </Box>
    </Box>
  );
};