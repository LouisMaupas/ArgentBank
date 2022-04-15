import { React, useState } from "react";
import { useDispatch } from "react-redux";
import { useToken, useFirstName } from "../../utils/hooks/customHooks";
import { handleUserProfile } from "../../features/slices/user";
import { putEditProfil } from "../../utils/apiRequest";

export default function User() {
  const dispatch = useDispatch(),
    userToken = useToken();
  let newFirstName, newLastName, newEmail, newPassword;

  /**
   * Update user data
   * @param {*} e
   */
  const handleSubmit = (e) => {
    e.preventDefault();
    putEditProfil(userToken, newFirstName, newLastName, newEmail, newPassword)
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
    console.log(ev.target.name);
    switch (ev.target.name) {
      case "firstName":
        newFirstName = ev.target.value;
        break;
      case "lastName":
        newLastName = ev.target.value;
        break;
      case "email":
        newEmail = ev.target.value;
        break;
      case "password":
        newPassword = ev.target.value;
        break;
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="d-flex flex-column">
        <label>
          Prénom :
          <input type="text" name="firstName" onChange={handleChange} />
        </label>
        <label>
          Nom :
          <input type="text" name="lastName" onChange={handleChange} />
        </label>
        <label>
          Email :
          <input type="email" name="email" onChange={handleChange} />
        </label>
        <label>
          Password :
          <input type="password" name="password" onChange={handleChange} />
        </label>
        <input type="submit" value="Envoyer" />
      </form>
    </>
  );
}
