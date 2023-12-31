import React from "react";
import RegistrationPage from "./Pages/RegistrationPage";
import SelectionPage from "./Pages/SelectionPage";
import HomePage from "./Pages/HomePage"
import EntertainmentPage from "./Pages/EntertainmentPage";
import { Route, Routes } from 'react-router-dom'
import './App.css'

function App() {

  return (
    <Routes>

      <Route path="/" element={<RegistrationPage />} />
      <Route path="/SelectionPage" element={<SelectionPage />} />
      <Route path="/HomePage" element={<HomePage/>} />
      <Route path="/EntertainmentPage" element={<EntertainmentPage/>} />

    </Routes>
  )
}


export default App;
