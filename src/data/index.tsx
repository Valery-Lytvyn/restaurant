import { ROUTES } from "../routing/routes";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";
import GitHubIcon from "@mui/icons-material/GitHub";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import MailIcon from "@mui/icons-material/Mail";
import CallIcon from "@mui/icons-material/Call";
import Dosa from "../assets/images/dosa.webp";
import Chola from "../assets/images/chhola.webp";
import Idli from "../assets/images/idli.webp";
import MasalaDosa from "../assets/images/masala.webp";
import Paneer from "../assets/images/paneer.webp";
import Gujrati from "../assets/images/gujrati.webp";

export const navData = [
  {
    navItem: "Home",
    link: ROUTES.index,
  },
  {
    navItem: "Menu",
    link: ROUTES.menu,
  },
  {
    navItem: "About",
    link: ROUTES.about,
  },
  {
    navItem: "Contact",
    link: ROUTES.contact,
  },
];

export const socialMediaData = [
  { id: 1, icon: <InstagramIcon />, link: "https://www.instagram.com/" },
  { id: 2, icon: <TwitterIcon />, link: "https://www.twitter.com/" },
  { id: 3, icon: <YouTubeIcon />, link: "https://www.youtube.com/" },
  { id: 4, icon: <GitHubIcon />, link: "https://www.github.com/" },
];

export const contactData = [
  {
    id: 1,
    icon: <SupportAgentIcon sx={{ color: "#000" }} />,
    link: "tel:050-821-6082",
    label: "050-821-6082",
  },
  {
    id: 2,
    icon: <MailIcon sx={{ color: "skyblue" }} />,
    link: "mailto:lytvynvalery@gmail.com",
    label: " lytvynvalery@gmail.com",
  },
  {
    id: 3,
    icon: <CallIcon sx={{ color: "green" }} />,
    link: "tel:050-821-6082",
    label: "050-821-6082",
  },
];

export const menuData = [
  {
    name: "Dosa",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Placeat, ab!",
    image: Dosa,
  },
  {
    name: "Chola",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Placeat, ab!",
    image: Chola,
  },
  {
    name: "Idli Sambhar",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Placeat, ab!",
    image: Idli,
  },
  {
    name: "Masala Dosa",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Placeat, ab!",
    image: MasalaDosa,
  },
  {
    name: "Paneer",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Placeat, ab!",
    image: Paneer,
  },
  {
    name: "Gujrati",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Placeat, ab!",
    image: Gujrati,
  },
];
