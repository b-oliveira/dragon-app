import type { ReactNode } from "react";
import { Navigate } from "react-router-dom";
import { useSession } from "../hooks";

type Props = {
  children: ReactNode;
};

export const PrivateRoute = ({ children }: Props) => {
  const { isLoggedUser } = useSession();
  return isLoggedUser ? <>{children}</> : <Navigate to="/" replace />;
};
