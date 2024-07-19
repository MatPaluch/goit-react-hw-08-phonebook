import { useDispatch, useSelector } from "react-redux";
import styles from "./LoginForm.module.css";
import { logIn } from "../../redux/auth/operations";
import { selectIsValid } from "../../redux/auth/selectors";

export const LoginForm = () => {
  const dispatch = useDispatch();
  const isValid = useSelector(selectIsValid);
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    const inputEmail = form.elements.email.value;
    const inputPassword = form.elements.password.value;
    dispatch(logIn({ email: inputEmail, password: inputPassword }));
    form.reset();
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <label className={styles.label}>
        Email:
        <input type="email" name="email" required />
      </label>
      <label className={styles.label}>
        Password:
        <input type="password" name="password" required />
      </label>
      {isValid !== "" && <p className={styles.invalid}>{isValid}</p>}
      <button className={styles.login_button} type="submit">
        Log In
      </button>
    </form>
  );
};
