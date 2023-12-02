import React from "react";
import RegistrationPage from "./Pages/RegistrationPage";
import SelectionPage from "./Pages/SelectionPage";
import Browsing from "./Pages/Browsing"
import { Route, Routes } from 'react-router-dom'
import './App.css'

function App() {

  return (
    <Routes>

      <Route path="/" element={<RegistrationPage />} />
      <Route path="/SelectionPage" element={<SelectionPage />} />
      <Route path="/Browsing" element={<Browsing />} />

    </Routes>
  )
}


export default App;
