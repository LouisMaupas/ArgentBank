import { Link, useNavigate, Navigate } from "react-router-dom";
import Button from "../../components/Button/Button";
import { React, useState } from "react";
import { useDispatch } from "react-redux";
import { postLogin, postToken } from "../../features/apiRequest.js";
import { userLogin } from "../../features/auth";
import { handleUserProfile } from "../../features/user";
import { useLogged } from "../../utils/hooks/customHooks";

export default function SignIn() {
  /**
   * Declare variables
   */
  const dispatch = useDispatch(),
    navigate = useNavigate(),
    logged = useLogged(),
    [userName, setUserName] = useState(""),
    [userPassword, setUserPassword] = useState(""),
    [error, setError] = useState("");

  /**
   * At user form submit, do a http post login with data then get and  token and stock token
   * @param {Event} e
   */
  const handleSubmit = (e) => {
    e.preventDefault();
    postLogin(userName, userPassword)
      .then(async (res) => {
        const token = res?.data?.body?.token;
        if (token) {
          postToken(token)
            .then(async (response) => {
              dispatch(handleUserProfile(response.data.body));
              dispatch(userLogin(token));
              localStorage.setItem("token", token);
              navigate("/user");
            })
            .catch((error) => {
              setError(error);
              console.log(error);
            });
        } else {
          console.log("token is : " + token ? token : "absent");
          navigate("/http-error");
        }
      })
      .catch((error) => {
        console.log(error);
        setError(error);
      });
  };

  return (
    <main className="main bg-dark">
      <section className="sign-in-content">
        <i className="fa fa-user-circle sign-in-icon"></i>
        <h1>Sign In</h1>
        <form onSubmit={handleSubmit}>
          <div className="input-wrapper">
            <label htmlFor="username">Username</label>
            <input type="text" id="username" />
          </div>
          <div className="input-wrapper">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" />
          </div>
          <div className="input-remember">
            <input type="checkbox" id="remember-me" />
            <label htmlFor="remember-me">Remember me</label>
          </div>
          <Link className="sign-in-button" to="/user">
            Sign In
          </Link>
          {/* <Button content={"Sign In"} /> */}
        </form>
      </section>
    </main>
  );
}
