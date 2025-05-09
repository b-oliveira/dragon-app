import type { Login, User } from "../types";

export const AuthService = {
  login: (login: Login): User => {
    if (login.email != "admin@email.com" || login.password != "admin")
      throw new Error("Login error!");

    return {
      name: "Admin",
    };
  },
};
