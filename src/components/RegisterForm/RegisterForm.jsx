import { useDispatch } from "react-redux";
import styles from "./RegisterForm.module.css";
import { register } from "../../redux/auth/operations";

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    const nameValue = form.elements.name.value;
    const emailValue = form.elements.email.value;
    const passwordValue = form.elements.password.value;
    dispatch(
      register({ name: nameValue, email: emailValue, password: passwordValue }),
    );
    form.reset();
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit} autoComplete="off">
      <label className={styles.label}>
        Username:
        <input type="text" name="name" />
      </label>
      <label className={styles.label}>
        Email:
        <input type="email" name="email" />
      </label>
      <label className={styles.label}>
        Password:
        <input type="password" name="password" />
      </label>
      <button className={styles.sign_button} type="submit">
        Sign up
      </button>
    </form>
  );
};
