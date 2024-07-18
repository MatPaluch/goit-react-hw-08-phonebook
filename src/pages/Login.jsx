import { Helmet, HelmetProvider } from "react-helmet-async";
import { LoginForm } from "../components/LoginForm/LoginForm";
import { OpenBook } from "../components/OpenBook";

export default function Login() {
  return (
    <HelmetProvider>
      <OpenBook>
        <Helmet>
          <title>Login</title>
        </Helmet>
        <LoginForm />
      </OpenBook>
    </HelmetProvider>
  );
}
