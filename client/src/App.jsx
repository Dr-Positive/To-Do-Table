import React from "react";

import { Route, Routes } from "react-router-dom";

import  MainPage  from "./pages/mainPage";
import  AuthPage  from "./pages/authPage";

function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={ <MainPage />} />
      <Route path="/auth" element={ <AuthPage />} />
      {/* <Route path="" element={ <MainPage />} /> */}
    </Routes>
    </>
  );
}

export default App;
