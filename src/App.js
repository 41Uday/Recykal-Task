import React from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./components/Home";

import ContactUs from "./components/ContactUs";

import DBDetails from "./components/DBDetails";

import "./App.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/db" element={<DBDetails />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
