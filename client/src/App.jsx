import React from "react";

import { Route, Routes } from "react-router-dom";

import  MainPage  from "./pages/mainPage";
import  AuthPage  from "./pages/authPage";
import  RegPage  from "./pages/regPage";

function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={ <MainPage />} />
      <Route path="/auth" element={ <AuthPage />} />
      <Route path="/register" element={ <RegPage />} />
      {/* <Route path="" element={ <MainPage />} /> */}
    </Routes>
    </>
  );
}

export default App;
