import { React, useState } from "react";
import { useDispatch } from "react-redux";
import { useToken, useFirstName } from "../../utils/hooks/customHooks";
import { handleUserProfile } from "../../features/slices/user";
import { putEditProfil } from "../../utils/apiRequest";

export default function User() {
  const dispatch = useDispatch(),
    userToken = useToken(),
    // useSelector((state) => state.user.firstName)
    userFirstName = useFirstName();

  /**
   * Update user data
   * @param {*} e
   */
  const handleSubmit = (e) => {
    e.preventDefault();
    putEditProfil(userToken, "NouveauNom")
      .then(async (response) => {
        dispatch(handleUserProfile(response.data.body));
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="d-flex flex-column">
        <label>
          Prénom :
          <input type="text" name="firstName" />
        </label>
        <input type="submit" value="Envoyer" />
      </form>
    </>
  );
}
