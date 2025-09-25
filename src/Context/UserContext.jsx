import { createContext, useState, useEffect } from "react";

export const RegisterUser = createContext();

export function RegisterUserProvider({ children }) {
  // refresh ke baad bhi user load hoga
  const [user, setUser] = useState(() => {
    const saved = localStorage.getItem("loggedInUser");
    return saved ? JSON.parse(saved) : null;
  });

  useEffect(() => {
    if (user) {
      localStorage.setItem("loggedInUser", JSON.stringify(user));
    } else {
      localStorage.removeItem("loggedInUser");
    }
  }, [user]);

  return (
    <RegisterUser.Provider value={{ user, setUser }}>
      {children}
    </RegisterUser.Provider>
  );
}