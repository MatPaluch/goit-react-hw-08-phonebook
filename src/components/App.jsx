import { Navigate, Route, Routes } from "react-router-dom";
import { lazy } from "react";
import { Layout } from "./Layout";
import { RestrictedRoute } from "./RestrictedRoute";
import { PrivateRoute } from "./PrivateRoute";

const HomePage = lazy(() => import("../pages/Home"));
const LoginPage = lazy(() => import("../pages/Login"));
const RegisterPage = lazy(() => import("../pages/Register"));
const ContactsPage = lazy(() => import("../pages/Contacts"));

const App = () => {
  return (
    <Routes>
      <Route path="/goit-react-hw-08-phonebook" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route
          path="login"
          element={
            <RestrictedRoute
              redirectTo="/goit-react-hw-08-phonebook/contacts"
              component={<LoginPage />}
            />
          }
        />
        <Route
          path="register"
          element={
            <RestrictedRoute
              redirectTo="/goit-react-hw-08-phonebook/contacts"
              component={<RegisterPage />}
            />
          }
        />
        <Route
          path="contacts"
          element={
            <PrivateRoute
              redirectTo="/goit-react-hw-08-phonebook/login"
              component={<ContactsPage />}
            />
          }
        />
      </Route>
    </Routes>
  );
};
export default App;
