import React from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import WelcomePage from "./pages/WelcomePage";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<WelcomePage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
