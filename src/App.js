import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import SignIn from "./pages/SignIn/SignIn";
import User from "./pages/User/User";
import Home from './pages/Home/Home';
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="sign-in" element={<SignIn />} />
        <Route path="user" element={<User />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
