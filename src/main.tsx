import React from "react";
import ReactDOM from "react-dom/client";
import Home from "./routes/Home.tsx";
import "./index.css";
import { createBrowserRouter, Router, RouterProvider } from "react-router-dom";
import NewTweet from "./routes/NewTweet.tsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <h1>Error</h1>,
  },
  {
    path: "/newtweet",
    element: <NewTweet />,
  },
]);
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
