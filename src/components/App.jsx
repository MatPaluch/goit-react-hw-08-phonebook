import { Route, Routes } from "react-router-dom";
import { lazy } from "react";
import { Layout } from "./Layout";

const HomePage = lazy(() => import("../pages/Home"));
const LoginPage = lazy(() => import("../pages/Login"));
const RegisterPage = lazy(() => import("../pages/Register"));
const ContactsPage = lazy(() => import("../pages/Contacts"));

const App = () => {
  return (
    <Routes>
      <Route path="/goit-react-hw-08-phonebook" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="login" element={<LoginPage />} />
        <Route path="register" element={<RegisterPage />} />
        <Route path="phonebook" element={<ContactsPage />} />
      </Route>
    </Routes>
  );
};
export default App;
