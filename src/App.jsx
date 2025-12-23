import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import ResponsiveAppBar from "./components/menu/Menu";
import SinglCard from "./components/singleCard/SinglCard";
import { Box, flexbox } from "@mui/system";

function App() {
  const [count, setCount] = useState(0);
  const handleCardId = (id) => {
    console.log(id);
  };
  const list = [1, 2, 3, 4, 5];
  const mockData = [
    {
      id: 1,
      name: "Home Alone",
      image:
        "https://disney.images.edge.bamgrid.com/ripcut-delivery/v2/variant/disney/b8b4eece-e8be-47c5-a143-00e125cae1ae/compose?aspectRatio=1.78&format=webp&width=1200",
      time: "1hr: 50mins",
    },
    {
      id: 2,
      name: "Black Adam",
      image:
        "https://m.media-amazon.com/images/I/811FSHgRALL._AC_UF1000,1000_QL80_.jpg",
      time: "2hr: 10mins",
    },
    {
      id: 3,
      name: "Back to the Future",
      image:
        "https://images.squarespace-cdn.com/content/v1/5c62c09c4d546e27dc1016c7/bb899014-6c80-4956-b3e2-4169931edbf5/ff68e65f5d5ee5dd98fc71c1218a71e3e1008668880b6430d4e912ebf5bda412._UR1920%2C1080_.jpg",
      time: "2hr: 50mins",
    },
    {
      id: 4,
      name: "Avengers",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsB4do3mKhgTAGmba4MLr3i7bMmRvxOaPRAg&s",
      time: "2hr:30mins",
    },
  ]
  return(
    <>
      <ResponsiveAppBar />
      <Box
        sx={{
          marginTop: "75px",
          display: "flex",
          gap: "10px",
        }}
      >
        {mockData.map((el) => (
          <SinglCard
            key={el.id}
            id={el.id}
            name={el.name}
            image={el.image}
            time={el.time}
            handleCardId={handleCardId}
          />
        ))}
      </Box>
    </>
  );
}

export default App;
