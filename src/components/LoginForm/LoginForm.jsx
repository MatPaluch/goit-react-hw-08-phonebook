import { useDispatch } from "react-redux";
import styles from "./LoginForm.module.css";
import { logIn } from "../../redux/auth/operations";

export const LoginForm = () => {
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    const inputEmail = form.elements.email.value;
    const inputPassword = form.elements.password.value;
    console.log({ email: inputEmail, password: inputPassword });
    dispatch(logIn({ email: inputEmail, password: inputPassword }));
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <label className={styles.label}>
        Email
        <input type="email" name="email" required />
      </label>
      <label className={styles.label}>
        Password
        <input type="password" name="password" required />
      </label>
      <button className={styles.login_button} type="submit">
        Log In
      </button>
    </form>
  );
};
