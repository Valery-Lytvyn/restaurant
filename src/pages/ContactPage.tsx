import {
  Box,
  Typography,
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
} from "@mui/material";
import Paper from "@mui/material/Paper";
import { contactData } from "../data";
import banner from "../assets/images/banner.webp";

function ContactPage() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: "1rem",
        py: "2.5rem",
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
          Contact our restaurant
        </Typography>
        <Typography variant="subtitle1" sx={{ textAlign: "justify" }}>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit.
          Reprehenderit quis error itaque quam placeat dolorum id corrupti, aut
          officiis ut et vel sequi animi expedita nemo accusamus maxime, velit
          voluptatibus.
        </Typography>
      </Box>
      <TableContainer
        component={Paper}
        sx={{
          width: { xs: "100%", sm: "35rem" },
          mt: { xs: "2rem", sm: "4rem" },
        }}
      >
        <Table aria-label="Contact table">
          <TableHead>
            <TableRow>
              <TableCell
                sx={{ background: "#000", color: "#fff" }}
                align="center"
              >
                Contact details
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody
            sx={{
              ".MuiTableCell-root:hover": {
                background: "rgba(230,230,230,0.5)",
              },
            }}
          >
            {contactData.map(({ id, icon, link, label }) => (
              <TableRow key={id}>
                <TableCell>
                  <a href={link} target="_blank" rel="noreferrer">
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "flex-start",
                        alignItems: "center",
                        gap: ".5rem",
                        width: "100%",
                      }}
                    >
                      {icon}
                      <Typography variant="subtitle1" sx={{ color: "#000" }}>
                        {label}
                      </Typography>
                    </Box>
                  </a>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}

export default ContactPage;
