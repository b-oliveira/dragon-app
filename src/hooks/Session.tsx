import React, { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import type { Login, User } from "../types";
import { AuthService } from "../services";

type State = {
  user: User | null;
  isLoggedUser: boolean;
  isCollapsedSidebar: boolean;
  login: (login: Login) => void;
  logout: () => void;
  changeSidebarBehavior: () => void;
};

type Props = {
  children: React.ReactNode;
};

const SessionContext = createContext<State>({} as State);

const SessionProvider: React.FC<Props> = ({ children }) => {
  const navigate = useNavigate();

  const [user, setUser] = useState<User | null>(() => {
    const storedUser = localStorage.getItem("user");
    return storedUser ? JSON.parse(storedUser) : null;
  });
  const isLoggedUser = user != null;
  const [isCollapsedSidebar, setCollapsedSidebar] = useState<boolean>(true);

  const login = (login: Login): void => {
    const user = AuthService.login(login);
    localStorage.setItem("user", JSON.stringify(user));
    setUser(user);
  };

  const logout = (): void => {
    localStorage.removeItem("user");
    setUser(null);
    navigate("/");
  };

  const changeSidebarBehavior = (): void => {
    setCollapsedSidebar((oldCollapedSidebar) => !oldCollapedSidebar);
  };

  return (
    <SessionContext.Provider
      value={{
        user,
        isLoggedUser,
        isCollapsedSidebar,
        login,
        logout,
        changeSidebarBehavior,
      }}
    >
      {children}
    </SessionContext.Provider>
  );
};

const useSession = (): State => {
  const context = useContext(SessionContext);

  return context;
};

export { SessionProvider, useSession };
