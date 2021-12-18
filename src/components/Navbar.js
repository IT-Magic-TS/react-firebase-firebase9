//import { getAuth, signOut } from "firebase/auth";
import React from "react";
import { Link } from "react-router-dom";
import { useAuthContext } from "../hooks/useAuthContext";
import { useLogout } from "../hooks/useLogout";

export default function Navbar() {
  const { user } = useAuthContext();
  console.log(user);
  // const auth = getAuth();
  const { logout } = useLogout();
  const clickHandler = () => {
    // signOut(auth)
    //   .then(() => {
    //     console.log("Signout");
    //   })
    //   .catch(err => {
    //     console.log(err.message);
    //   });
    logout();
  };
  return (
    <nav>
      <h1>My Reading List</h1>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        {!user && (
          <>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/signup">Signup</Link>
            </li>
          </>
        )}
        {user && (
          <li>
            <button onClick={clickHandler}>Logout</button>
          </li>
        )}
      </ul>
    </nav>
  );
}
