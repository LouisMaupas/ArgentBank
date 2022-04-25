import {React, useEffect} from 'react';
import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import SignIn from "./pages/SignIn/SignIn";
import Dashboard from "./pages/Dashboard/Dashboard";
import Home from './pages/Home/Home';
import HttpError from './pages/HttpError/HttpError';
import { Routes, Route } from "react-router-dom";
import { postToken, postLogin } from "./utils/apiRequest";
import { useDispatch } from "react-redux";
import {handleUserProfile} from "./features/slices/user"
import {userLogin} from "./features/slices/auth"
import PrivateRoute from "./pages/PrivateRoute/PrivateRoute"
import { useLogged } from "./utils/hooks/customHooks";
import User from "./pages/User/User"


function App() {


  const dispatch = useDispatch();

  /**
   * Post token at eac
   */
  useEffect(() => {
    const token = localStorage.getItem("token")
    if (token) {
      postToken(token)
        .then(async (res) => {
          dispatch(handleUserProfile(res.data.body));
          dispatch(userLogin(token));
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, []);

  const logged = useLogged();


  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="sign-in" element={<SignIn />} />
        <Route path="/user" element={<PrivateRoute component={User} />} />
        <Route path="/dashboard" element={<PrivateRoute component={Dashboard} />} />
        <Route path="*" element={<HttpError />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
