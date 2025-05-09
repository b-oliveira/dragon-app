import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import { PrivateRoute } from "./PrivateRoute";
import {
  DragonDatailPage,
  DragonListPage,
  DragonRegisterPage,
  LoginPage,
} from "../pages";
import { PrivateLayout } from "../layouts";
import { SessionProvider } from "../hooks";

export const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          element={
            <SessionProvider>
              <Outlet />
            </SessionProvider>
          }
        >
          <Route path="/" element={<LoginPage />} />

          <Route
            element={
              <PrivateRoute>
                <PrivateLayout />
              </PrivateRoute>
            }
          >
            <Route
              path="/dragons"
              element={
                <PrivateRoute>
                  <DragonListPage />
                </PrivateRoute>
              }
            />
            <Route
              path="/dragons/new"
              element={
                <PrivateRoute>
                  <DragonRegisterPage />
                </PrivateRoute>
              }
            />
            <Route
              path="/dragons/:id"
              element={
                <PrivateRoute>
                  <DragonDatailPage />
                </PrivateRoute>
              }
            />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
