import { useSelector } from "react-redux";

/**
 * heck if user logged
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
   const token = useSelector((state) => state.login.token);
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

export { useLogged, useToken, useUserData };
