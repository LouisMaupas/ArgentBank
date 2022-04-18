import { useSelector } from "react-redux";

/**
 * Check if user logged
 * @returns 
 */
function useLogged() {
   // Get state 'authentification' from auth.js 
  const logged = useSelector((state) => state.authentification.isAuthentified);
  return logged;
} 

  /**
   * 
   * @returns Return user token
   */
 function useToken() {
   // Get state 'user'
   const token = useSelector((state) => state.authentification.token);
   return token;
}

/**
 * 
 * @returns Get user data
 */
function useUserData() {
  const data = useSelector((state) => state.user);
  return data;
}

/**
 * Return user first name
 * @returns 
 */
function useFirstName() {
  const firstName = useSelector((state) => state.user.firstName);

  return firstName;
}

export { useLogged, useToken, useUserData, useFirstName };
