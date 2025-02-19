import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainComponents from "./MainComponents";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/*" element={<MainComponents />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
