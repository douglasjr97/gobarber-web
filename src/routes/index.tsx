import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "../components/Dashboard";
import SignIn from "../pages/SignIn";

const Rotas: React.FC = () => (
  <BrowserRouter>
    <Routes>
      <Route index element={<SignIn />} />
      <Route path="/signin" element={<Dashboard />} />
    </Routes>
  </BrowserRouter>
);

export default Rotas;
