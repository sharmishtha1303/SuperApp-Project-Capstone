import React from "react";
import RegistrationPage from "./Pages/RegistrationPage";
import { Route, Routes } from 'react-router-dom'
import './App.css'

function App() {

  return (
    <Routes>

      <Route path="/" element={<RegistrationPage />} />

    </Routes>
  )
}

export default App
