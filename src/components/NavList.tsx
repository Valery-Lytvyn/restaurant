import { List, ListItem } from "@mui/material";
import { navData } from "../data";
import { Link } from "react-router-dom";

function NavList() {
  return (
    <List
      sx={{
        listStyle: "none",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: { xs: "column", sm: "row" },
      }}
    >
      {navData.map(({ navItem, link }) => (
        <ListItem key={navItem}>
          <Link to={link}>{navItem}</Link>
        </ListItem>
      ))}
    </List>
  );
}

export default NavList;
