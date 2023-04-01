import React from "react";

import "./App.css";
import MovieList from "./MovieList";
import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import Podcasts from "./Podcasts";
import NavBar from "./NavBar";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/MovieList" element={<MovieList />} />
        <Route path="/Podcasts" element={<Podcasts />} />
      </Routes>
    </div>
  );
}

export default App;
