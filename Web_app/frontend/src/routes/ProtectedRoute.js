import { Navigate } from "react-router";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase";
import { useEffect, useState } from "react";

export const ProtectedRoute = ({ children, type }) => {
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setIsUserLoggedIn(true);
      } else {
        setIsUserLoggedIn(false);
      }
    });
  }, []);

  console.log("type and in", { type, auth, isUserLoggedIn });

  if (type === "auth" && isUserLoggedIn) {
    return <Navigate to="/dashboard" />;
  }

  if (type === "auth" && !isUserLoggedIn) {
    return <Navigate to="/" />;
  }

  if (type !== "auth" && !isUserLoggedIn) {
    return <Navigate to="/" />;
  }

  // if (type === "admin" && !userDetails?.isAdmin) {
  //   return <Navigate to="/dashboard" />;
  // }

  return children;
};
