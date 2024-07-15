import { Helmet } from "react-helmet";
import { RegisterForm } from "../components/RegisterForm/RegisterForm";
import { OpenBook } from "../components/OpenBook";

export default function Register() {
  return (
    <OpenBook>
      <Helmet>
        <title>Register</title>
      </Helmet>
      <RegisterForm></RegisterForm>
    </OpenBook>
  );
}
