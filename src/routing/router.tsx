import { createHashRouter } from "react-router-dom";
import { ROUTES } from "./routes";
import HomePage from "../pages/HomePage";
import ErrorPage from "../pages/ErrorPage";
import AboutPage from "../pages/AboutPage";
import Layout from "../components/layout/Layout";
import MenuPage from "../pages/MenuPage";
import ContactPage from "../pages/ContactPage";

export const router = createHashRouter([
  {
    path: ROUTES.index,
    element: <Layout />,
    errorElement: <ErrorPage />,

    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: ROUTES.about,
        element: <AboutPage />,
      },
      {
        path: ROUTES.menu,
        element: <MenuPage />,
      },
      {
        path: ROUTES.contact,
        element: <ContactPage />,
      },
    ],
  },
]);
