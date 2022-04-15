import React from "react";
import { Route, Routes } from "react-router-dom";

import Navbar from "./components/navbar/NavbarComponent";
import Home from "./components/home/HomeComponent";
import LogInContainer from "./components/authentification/LogInContainer";
import SignInContainer from "./components/authentification/SignInContainer";
import { store } from "./app/store";
import { Provider } from "react-redux";

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Navbar />
        <main id="App-main">
          <Routes>
            <Route element={<Home />} path="/" />
            <Route path="/connection" element={<LogInContainer />} />
            <Route path="/inscription" element={<SignInContainer />} />
          </Routes>
        </main>
      </Provider>
    </div>
  );
}

export default App;
