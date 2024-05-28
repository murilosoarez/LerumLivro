
import { createContext, useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';

export const AccountContext = createContext();
export default function UserContext ({ children })  {
  const navigate = useNavigate()
  const [user, setUser] = useState({ loggedIn: null });
  useEffect(() => {
    fetch("http://localhost:8080/login", {
      credentials: "include",
    })
    .catch(err => {
      setUser({ loggedIn: false });
      return;
    })
    .then(r => {
      if (!r || !r.ok || r.status >= 400) {
        setUser({ loggedIn: false });
        return;
      }
      return r.json();
    })
    .then(data => {
      if (!data) {
        setUser({ loggedIn: false });
        return;
      }
      setUser({ ...data });
    });
  }, []);
  return (
    <AccountContext.Provider value={{ user, setUser }}>
      {children}
    </AccountContext.Provider>
  );
};

