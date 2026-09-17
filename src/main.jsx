import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router";

import Layout from "./Layout/Layout";
import MoviListingPage from "./pages/MoviListingPage";
import MovieDetails from "./pages/MovieDetails";
import Home from "./pages/Home";

let router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      { index: true, Component: Home },
      {
        path: "/movies",
        Component: MoviListingPage,
        loader: async () => {
          const res = await fetch("https://api.tvmaze.com/shows");
          if (!res.ok) {
            throw new Error("failed");
          }
          return res.json();
        },
      },
      {
        path: "/movies/:id",
        Component: MovieDetails,
        loader: async ({ params }) => {
          const res = await fetch(`https://api.tvmaze.com/shows/${params.id}`);
          if (!res.ok) {
            throw new Error("failed");
          }
          return res.json();
        },
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
