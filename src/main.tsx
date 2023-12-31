import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CreateNewTweetProvider from "./context/CreateNewTweet";
import Home from "./pages/Home";
import NewTweet from "./pages/NewTweet";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <CreateNewTweetProvider>
      <Router>
        <Routes>
          <Route element={<Home />} path="/" />
          <Route element={<NewTweet />} path="/newtweet" />
        </Routes>
      </Router>
    </CreateNewTweetProvider>
  </React.StrictMode>
);
