import { Helmet } from "react-helmet";
import { RegisterForm } from "../components/RegisterForm/RegisterForm";

export default function Register() {
  return (
    <main className="section">
      <div className="book">
        <Helmet>
          <title>Register</title>
        </Helmet>
        <RegisterForm></RegisterForm>
      </div>
    </main>
  );
}
