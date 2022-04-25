import { React } from "react";
import { useDispatch } from "react-redux";
import { useToken, useUserData } from "../../utils/hooks/customHooks";
import { handleUserProfile } from "../../features/slices/user";
import { putEditProfil } from "../../utils/apiRequest";
import style from "./User.css";

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
        dispatch(handleUserProfile(res.data.body));
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
        <div>Welcome Back</div>
        <div className="user-form__inputs">
          <label className="my-2">
            <input
              type="text"
              name="firstName"
              onChange={handleChange}
              placeholder={userData.firstName}
            />
          </label>
          <label className="my-2">
            <input
              type="text"
              name="lastName"
              onChange={handleChange}
              placeholder={userData.lastName}
            />
          </label>
        </div>
        <div className="user-form__buttons">
          <button className="btn my-2" type="submit" value="Envoyer">
            Save
          </button>
          <button className="btn my-2">Cancel</button>
        </div>
      </form>
      <div>
        <section className="account">
          <div className="account-content-wrapper">
            <h3 className="account-title">Argent Bank Savings (x6712)</h3>
            <p className="account-amount">$10,928.42</p>
            <p className="account-amount-description">Available Balance</p>
          </div>
          <div className="account-content-wrapper cta">
            <button className="transaction-button">View transactions</button>
          </div>
        </section>
        <section className="account">
          <div className="account-content-wrapper">
            <h3 className="account-title">Argent Bank Credit Card (x8349)</h3>
            <p className="account-amount">$184.30</p>
            <p className="account-amount-description">Current Balance</p>
          </div>
          <div className="account-content-wrapper cta">
            <button className="transaction-button">View transactions</button>
          </div>
        </section>
      </div>
    </div>
  );
}
