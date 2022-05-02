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
import User from "./pages/User/User"


function App() {

  /**
   * A store method : send actions to update state 
   */
  const dispatch = useDispatch();

  /**
   * Manage auth, if token get user data
   */
  useEffect(() => {
    const token = localStorage.getItem("token")
    if (token) {
      postToken(token)
        .then(async (res) => {
          // update state with user data
          dispatch(handleUserProfile(res.data.body));
          // update state with token and say user is connected
          dispatch(userLogin(token));
        })
        .catch((error) => {
          console.log(error);
        });
    }
    // effect doesn’t depend on any values from props or state, so it never needs to re-run
  }, []);

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
