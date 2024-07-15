import styles from "./RegisterForm.module.css";

export const RegisterForm = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.currentTarget;

    form.reset();
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit} autoComplete="off">
      <label className={styles.label}>
        Username
        <input type="text" name="name" />
      </label>
      <label className={styles.label}>
        Email
        <input type="email" name="email" />
      </label>
      <label className={styles.label}>
        Password
        <input type="password" name="password" />
      </label>
      <button className={styles.sign_button} type="submit">
        Sign up
      </button>
    </form>
  );
};
