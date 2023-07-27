import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import { menuData } from "../data";

function MenuPage() {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        gap: "1rem",
        flexWrap: "wrap",
        background: "rgba(230,230,230,0.5)",
      }}
    >
      {menuData.map(({ name, description, image }) => (
        <Card sx={{ margin: "1.5rem" }} key={name}>
          <CardActionArea>
            <CardMedia component="img" height="150" image={image} alt={name} />
            <CardContent
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                p: "2rem",
              }}
            >
              <Typography
                gutterBottom
                variant="h5"
                component="div"
                sx={{ fontWeight: "bold", py: "1rem" }}
              >
                {name}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {description}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      ))}
    </Box>
  );
}

export default MenuPage;
