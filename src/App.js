import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import SignIn from "./pages/SignIn/SignIn"
import Home from './pages/Home/Home';
import { Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="sign-in" element={<SignIn />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
