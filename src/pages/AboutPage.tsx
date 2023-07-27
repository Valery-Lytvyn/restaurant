import { Box, Typography } from "@mui/material";
import banner from "../assets/images/banner.webp";

function AboutPage() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: "1rem",
        py: "7.5rem",
        px: "1rem",
        height: "100%",
        background: `    linear-gradient(
        rgba(255, 250, 250, 0.8), 
        rgba(255, 250, 250, 0.8)
      ), url(${banner})`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <Box
        sx={{
          background: "rgba(230,230,230,0.5)",
          borderRadius: "1rem",
          padding: "2rem .5rem",
          display: "flex",
          flexDirection: "column",
          gap: "1rem",
        }}
      >
        <Typography
          variant="h4"
          sx={{
            alignSelf: "center",
            fontWeight: "bold",
            fontSize: { xs: "1.5rem", sm: "2rem" },
            textAlign: "center",
            textTransform: "capitalize",
          }}
        >
          Welcome to our restaurant
        </Typography>
        <Typography variant="subtitle1" sx={{ textAlign: "justify" }}>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit.
          Reprehenderit quis error itaque quam placeat dolorum id corrupti, aut
          officiis ut et vel sequi animi expedita nemo accusamus maxime, velit
          voluptatibus. Numquam velit labore vel esse sit eligendi cumque,
          ducimus repellendus ea eos? Accusantium unde ut adipisci natus
          doloremque quo laudantium dolor, totam deleniti recusandae, omnis
          commodi necessitatibus odit ea laborum! Perferendis, accusamus nemo id
          tempore illum itaque incidunt eius aliquid ab, blanditiis deserunt.
          Rem nulla libero, temporibus quaerat a asperiores deserunt, aspernatur
          beatae aliquid eius, accusantium saepe! Neque, delectus voluptates!
        </Typography>
        <Typography variant="subtitle1" sx={{ textAlign: "justify" }}>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit.
          Reprehenderit quis error itaque quam placeat dolorum id corrupti, aut
          officiis ut et vel sequi animi expedita nemo accusamus maxime, velit
          voluptatibus. Numquam velit labore vel esse sit eligendi cumque,
          ducimus repellendus ea eos? Accusantium unde ut adipisci natus
          doloremque quo laudantium dolor, totam deleniti recusandae, omnis
          commodi necessitatibus odit ea laborum! Perferendis, accusamus nemo id
          tempore illum itaque incidunt eius aliquid ab, blanditiis deserunt.
          Rem nulla libero, temporibus quaerat a asperiores deserunt, aspernatur
          beatae aliquid eius, accusantium saepe! Neque, delectus voluptates!
        </Typography>
      </Box>
    </Box>
  );
}

export default AboutPage;
