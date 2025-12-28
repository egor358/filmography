import "./App.css";
import ResponsiveAppBar from "./components/menu/Menu";
import SinglCard from "./components/singleCard/SinglCard";
import { Box } from "@mui/system";
import {Footer} from "./components/footer/Footer";

function App() {
  const handleCardId = (id) => {
    console.log(id);
  };

  const mockData = [
    {
      id: 1,
      name: "Home Alone",
      image: "/img/homeAlone.jpg",
      time: "1hr: 50mins",
    },
    {
      id: 2,
      name: "Black Adam",
      image: "/img/blackAdam.jpg",
      time: "2hr: 10mins",
    },
    {
      id: 3,
      name: "Back to the Future",
      image: "/img/backToTheFuture.jpg",
      time: "2hr: 50mins",
    },
    {
      id: 4,
      name: "Avengers",
      image: "/img/avengers.jpg",
      time: "2hr:30mins",
    },
  ];
  return (
    <Box sx={{
      height:'100vh',
      display:'flex',
      flexDirection:'column'
    }}>
      <ResponsiveAppBar />
      <Box
        sx={{
          marginTop: "75px",
          display: "flex",
          gap: "10px",
          marginX:"10px"
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
      
     <Footer/>
    </Box>
  );
}

export default App;
