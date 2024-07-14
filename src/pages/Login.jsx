import { Helmet } from "react-helmet";
import { LoginForm } from "../components/LoginForm/LoginForm";

export default function Login() {
  return (
    <main className="section">
      <div className="book">
        <Helmet>
          <title>Login</title>
        </Helmet>
        <LoginForm />
      </div>
    </main>
  );
}
