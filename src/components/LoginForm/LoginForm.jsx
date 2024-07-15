import styles from "./LoginForm.module.css";

export const LoginForm = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.currentTarget;

    form.reset();
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit} autoComplete="off">
      <label className={styles.label}>
        Email
        <input type="email" name="email" />
      </label>
      <label className={styles.label}>
        Password
        <input type="password" name="password" />
      </label>
      <button className={styles.login_button} type="submit">
        Log In
      </button>
    </form>
  );
};
