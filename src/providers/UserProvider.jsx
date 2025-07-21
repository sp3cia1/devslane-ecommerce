import React, { useState, useEffect, useMemo } from "react";
import Loading from "../components/Loading";
import { UserContext } from "../contexts/UserContext";
import axios from "axios";

function UserProvider({ children }) {
  const [user, setUser] = useState(undefined);
  const [loadingUser, setLoadingUser] = useState(true);

  const userData = useMemo(() => ({ user, setUser }), [user, setUser]);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      axios
        .get("https://myeasykart.codeyogi.io/me", {
          headers: { Authorization: token },
        })
        .then((response) => {
          setUser(response.data);
          setLoadingUser(false);
        }).catch(() => {
          localStorage.removeItem("token")
          setLoadingUser(false)
        });
    } else {
      setLoadingUser(false);
    }
  }, []);

  if (loadingUser){
    return <Loading/>
  }

  return (
    <UserContext.Provider value={userData}>{children}</UserContext.Provider>
  );
}

export default UserProvider;
