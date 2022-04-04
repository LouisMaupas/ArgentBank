import { useSelector } from "react-redux";

// Check if user logged
function useLogged() {
  const logged = useSelector((state) => state?.login?.isLogged);
  return logged;
}

// Return user's token
function useToken() {
  const token = useSelector((state) => state.login.token);
  return token;
}

// Return user's first name
function useFirstName() {
  const firstName = useSelector((state) => state.profile.firstName);
  return firstName;
}

// Return user's last name
function useLastName() {
  const lastName = useSelector((state) => state.profile.lastName);
  return lastName;
}

export { useLogged, useToken, useFirstName, useLastName };
