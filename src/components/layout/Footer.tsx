import { Box, Typography } from "@mui/material";

import { Link } from "react-router-dom";
import { socialMediaData } from "../../data";

function Footer() {
  return (
    <Box sx={{ background: "#000", color: "#fff", p: 3, textAlign: "center" }}>
      <Box
        sx={{
          my: 3,
          "& svg": {
            fontSize: "3rem",
            cursor: "pointer",
            mx: 1,
          },
          "& svg:hover": {
            transform: "scale(1.1)",
            transition: "all 400ms",
          },
        }}
      >
        {socialMediaData.map(({ id, icon, link }) => (
          <Link key={id} to={link} target="_blank" rel="noreferrer">
            {icon}
          </Link>
        ))}
      </Box>
      <Typography variant="h6"> All Rights Reserved &copy;</Typography>
    </Box>
  );
}

export default Footer;
