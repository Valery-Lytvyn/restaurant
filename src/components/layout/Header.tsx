import { useState } from "react";
import {
  AppBar,
  Box,
  Toolbar,
  Typography,
  IconButton,
  Drawer,
} from "@mui/material";
import RestaurantIcon from "@mui/icons-material/Restaurant";
import MenuIcon from "@mui/icons-material/Menu";
import NavList from "../NavList";

function Header() {
  const [isShowMobileMenu, setIsShowMobileMenu] = useState(false);

  const handleDrawerToggle = () => {
    setIsShowMobileMenu(!isShowMobileMenu);
  };
  return (
    <Box>
      <AppBar component={"nav"} position="static" sx={{ bgcolor: "#000" }}>
        <Toolbar>
          <IconButton
            onClick={handleDrawerToggle}
            sx={{ color: "goldenrod", mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            color="goldenrod"
            variant="h6"
            component="div"
            sx={{ flexGrow: 1 }}
          >
            <RestaurantIcon />
            The Restaurant
          </Typography>
          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            <NavList />
          </Box>
        </Toolbar>
      </AppBar>
      <Box>
        <Drawer
          sx={{
            "& .MuiDrawer-paper": {
              background: "#000",
              mt: "3.5rem",
            },
          }}
          variant="temporary"
          open={isShowMobileMenu}
          onClose={handleDrawerToggle}
          onClick={handleDrawerToggle}
        >
          <NavList />
        </Drawer>
      </Box>
    </Box>
  );
}

export default Header;
