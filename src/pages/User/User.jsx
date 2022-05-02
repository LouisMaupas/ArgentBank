import { React } from "react";
import { useDispatch } from "react-redux";
import { useToken, useUserData } from "../../utils/hooks/customHooks";
import { handleUserProfile } from "../../features/slices/user";
import { putEditProfil } from "../../utils/apiRequest";
import style from "./User.css";
import { Link } from "react-router-dom";

export default function User() {
  const dispatch = useDispatch(),
    userToken = useToken(),
    userData = useUserData();

  let newFirstName, newLastName;

  /**
   * Update user data
   * @param {*} e
   */
  const handleSubmit = (e) => {
    e.preventDefault();
    putEditProfil(userToken, newFirstName, newLastName)
      .then(async (res) => {
        // update state with res
        dispatch(handleUserProfile(res.data.body));
        document.getElementById("user-res").innerHTML = res.data.message;
      })
      .catch((err) => {
        console.log(err);
      });
  };

  /**
   * On change update state with input data
   */
  const handleChange = (ev) => {
    switch (ev.target.name) {
      case "firstName":
        newFirstName = ev.target.value;
        break;
      case "lastName":
        newLastName = ev.target.value;
        break;
    }
  };

  return (
    <div className="user-background">
      <form
        onSubmit={handleSubmit}
        className="user-form main--user main--little"
      >
        <div className="user-title">
          Welcome Back
          <br />
          <span id="user-res"></span>
        </div>
        <div className="user-form__inputs">
          <label className="my-2 user-form__btn--left">
            <input
              type="text"
              name="firstName"
              onChange={handleChange}
              placeholder={userData.firstName}
              className={"user-form__input"}
            />
          </label>
          <label className="my-2 user-form__btn--right">
            <input
              type="text"
              name="lastName"
              onChange={handleChange}
              placeholder={userData.lastName}
              className={"user-form__input"}
            />
          </label>
        </div>
        <div className="user-form__buttons">
          <button
            className="my-2 user-form__btn user-form__btn--left"
            type="submit"
            value="Envoyer"
          >
            Save
          </button>
          <button
            className="my-2 user-form__btn user-form__btn--right"
            type="reset"
          >
            Cancel
          </button>
        </div>
      </form>
      <div className="user-form__transactions">
        <section className="account">
          <div className="account-content-wrapper">
            <h3 className="account-title">Argent Bank Savings (x6712)</h3>
            <p className="account-amount">$10,928.42</p>
            <p className="account-amount-description">Available Balance</p>
          </div>
          <div className="account-content-wrapper cta">
            <Link to="/dashboard" className="transaction-button">
              View transactions
            </Link>
          </div>
        </section>
        <section className="account">
          <div className="account-content-wrapper">
            <h3 className="account-title">Argent Bank Credit Card (x8349)</h3>
            <p className="account-amount">$184.30</p>
            <p className="account-amount-description">Current Balance</p>
          </div>
          <div className="account-content-wrapper cta">
            <Link to="/dashboard" className="transaction-button">
              View transactions
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}
