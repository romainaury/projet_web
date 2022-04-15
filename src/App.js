import React from 'react';
import './App.css';


import { Route, Routes } from "react-router-dom";

import Navbar from "./components/navbar/NavbarComponent";
import Home from "./components/home/HomeComponent";
import SignIn from './components/authentification/SignInComponent';
import LogIn from './components/authentification/LogInComponent';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
      </header>
      <main id="App-main">
        <Routes>
          <Route element={<Home/>} path="/" />
          <Route path="/connection" element={<LogIn>  </LogIn>} />
          <Route path="/inscription" element={<SignIn />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
