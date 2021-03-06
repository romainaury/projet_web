import React from "react";
import { Route, Routes } from "react-router-dom";

import Navbar from "./components/navbar/NavbarContainer";
import Home from "./components/home/HomeContainer";
import LogInContainer from "./components/authentification/LogInContainer";
import SignInContainer from "./components/authentification/SignInContainer";
import LogOutContainer from "./components/authentification/LogOutContainer";
import { store } from "./app/store";
import { Provider } from "react-redux";

function App() {
  return (
    <div className="App d-flex flex-column vh-100 overflow-hidden position-relative">
      <Provider store={store}>
        <Navbar />
        <main
          id="App-main"
          className="position-relative d-flex overflow-hidden"
        >
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/connexion" element={<LogInContainer />} />
            <Route path="/inscription" element={<SignInContainer />} />
            <Route path="/deconnexion" element={<LogOutContainer />} />
          </Routes>
        </main>
      </Provider>
    </div>
  );
}

export default App;
