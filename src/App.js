import React from 'react';
import './App.css';


import { Route, Routes } from "react-router-dom";

import Navbar from "./components/navbar/NavbarComponent";
import Connection from "./components/authentification/ConnectionComponent";
import Inscription from "./components/authentification/InscriptionComponent";
import Home from "./components/home/HomeComponent";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
      </header>
      <main id="App-main">
        <Routes>
          <Route element={<Home/>} path="/" />
          <Route path="/connection" element={<Connection />} />
          <Route path="/inscription" element={<Inscription />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
