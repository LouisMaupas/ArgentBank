import {React, useEffect} from 'react';
import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import SignIn from "./pages/SignIn/SignIn";
import User from "./pages/User/User";
import Home from './pages/Home/Home';
import { Routes, Route } from "react-router-dom";
import { postToken } from "./features/apiRequest";
import { useDispatch } from "react-redux";
import handleUserProfile from "../src/features/user"
import userAuthentification from "../src/features/auth"
import PrivateRoute from "./pages/PrivateRoute/PrivateRoute"


function App() {


  const dispatch = useDispatch();

  /**
   * Get token from localStorage
   */
  useEffect(() => {
    const token = localStorage.getItem("token")
    if (token) {
      postToken(token)
        .then(async (res) => {
          dispatch(handleUserProfile(res.data.body));
          dispatch(userAuthentification(token));
        })
        .catch((error) => {
          alert(error);
        });
    }
  }, []);


  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="sign-in" element={<SignIn />} />
        <Route path="user" element={<PrivateRoute component={User} />} />
        {/* <Route path="*" element={<HttpError />} /> */}
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
