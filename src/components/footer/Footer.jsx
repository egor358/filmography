import { Box, Typography, IconButton } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import GoogleIcon from "@mui/icons-material/Google";

export const Footer = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#000000",
        width: "100%",
        height: "150px",
        marginTop: "auto",
        display: "flex",
      }}
    >
      <Box
        sx={{
          marginLeft: "40px",
          width: "60%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Typography
          sx={{
            marginTop: "30px",
            color: "white",
            fontSize: "10px",
            display: "flex",
            gap: "10px",
          }}
        >
          <span>Terms Of Use</span> <span>Privacy-Polici</span> <span>FAQ</span>
          <span>Watch List</span>
        </Typography>
        <Typography
          sx={{
            color: "white",
            fontSize: "10px",
            marginTop: "20px",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <span>
            2023 WATCHIT.All Rights Reserved.All videos and shows on this
            platform are trademarks of,and all raletad images and content are
            the property of,
          </span>
          <span>
            Streamit inc.Duplication and copy of this is strycly prohibited.All
            rights reserved
          </span>
        </Typography>
      </Box>
      <Box
        sx={{
          marginTop: "20px",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Typography
          sx={{
            fontSize: "10px",
            color: "white",
          }}
        >
          <span>Follow us:</span>
        </Typography>
        <Box
          sx={{
            marginTop: "5px",
            display: "flex",
            flexDirection: "row",
            gap: "10px",
          }}
        >
          <FacebookIcon
            sx={{
              width: "25px",
              height: "25px",
              color: "white",
            }}
          />
          <InstagramIcon
            style={{
              width: "25px",
              height: "25px",
              color: "white",
            }}
          />
          <TwitterIcon
            style={{
              width: "25px",
              height: "25px",
              color:"white"
            }}
          />
          <GoogleIcon
            src="/img/gadget.jpg"
            style={{
              width: "25px",
              height: "25px",
              color:"white"
            }}
          />
        </Box>
      </Box>

      <Box
        sx={{
          gap: "10px",
          marginTop: "20px",
          marginLeft: "100px",
        }}
      >
        <Typography
          sx={{
            color: "white",
            fontSize: "10px",
          }}
        >
          Watchhit App
        </Typography>
        <Box
          sx={{
            display: "flex",
            gap: "10px",
          }}
        >
          <img
            src="/img/App-store.png"
            style={{
              height: "30px",
              width: "80px",
            }}
          />
          <img
            src="/img/google-play.png"
            style={{
              height: "30px",
              width: "80px",
            }}
          />
        </Box>
      </Box>
    </Box>
  );
};
