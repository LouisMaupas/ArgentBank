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
   * Return user token
   * @returns Return user token
   */
 function useToken() {
   // Get state 'user'
   const token = useSelector((state) => state.authentification.token);
   return token;
}

/**
 * Return all user data
 * @returns Get user data
 */
function useUserData() {
  const data = useSelector((state) => state.user);
  return data;
}

export { useLogged, useToken, useUserData };
