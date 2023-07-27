import { Box, Button, Typography } from "@mui/material";
import banner from "../assets/images/banner.webp";
import { ROUTES } from "../routing/routes";
import { useNavigate } from "react-router-dom";

function HomePage() {
  const navigate = useNavigate();
  return (
    <Box
      sx={{
        height: "100%",
        background: `url(${banner})`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        display: "flex",
        justifyContent: { xs: "center", sm: "flex-start" },
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: { xs: "center", sm: "flex-start" },
          padding: "2rem",
          gap: "1rem",
          "button:hover": {
            background: "#000",
            color: "goldenrod",
          },
          background: { xs: "rgba(230,230,230,0.5)", sm: "none" },
          borderRadius: "1rem",
        }}
      >
        <Typography
          variant="h1"
          sx={{
            display: "flex",
            justifyContent: "center",
            fontWeight: "bold",
            fontSize: { xs: "2.5rem", sm: "4.5rem" },
          }}
        >
          Food website
        </Typography>
        <Typography
          variant="subtitle1"
          sx={{
            fontSize: { xs: "1.5rem", sm: "3rem" },
          }}
        >
          The best food
        </Typography>
        <Button
          variant="contained"
          sx={{
            border: "none",
            borderRadius: ".5rem",
            height: "3rem",
            width: "12rem",
            fontSize: { xs: "1.2rem", sm: "1.5rem" },
            textTransform: "uppercase",
            background: "#000",
          }}
          onClick={() => navigate(ROUTES.menu)}
        >
          Order now
        </Button>
      </Box>
    </Box>
  );
}

export default HomePage;
