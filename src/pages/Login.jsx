import { Helmet } from "react-helmet";
import { LoginForm } from "../components/LoginForm/LoginForm";
import { OpenBook } from "../components/OpenBook";

export default function Login() {
  return (
    <OpenBook>
      <Helmet>
        <title>Login</title>
      </Helmet>
      <LoginForm />
    </OpenBook>
  );
}
