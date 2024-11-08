import { useDispatch } from "react-redux";
import styles from "./RegisterForm.module.css";
import { register } from "../../redux/auth/operations";
import { useToast } from "@chakra-ui/react";

export const RegisterForm = () => {
  const dispatch = useDispatch();
  const toast = useToast();
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    const nameValue = form.elements.name.value;
    const emailValue = form.elements.email.value;
    const passwordValue = form.elements.password.value;
    const loginPromise = new Promise((resolve, reject) => {
      dispatch(
        register({
          name: nameValue,
          email: emailValue,
          password: passwordValue,
        }),
      )
        .then((response) => {
          if (response.error) {
            reject(response.error);
          } else {
            resolve(response);
          }
        })
        .catch((error) => reject(error));
    });

    toast.promise(loginPromise, {
      success: {
        title: "Registered successful",
        description: "Welcome!",
      },
      error: {
        title: "Register denied",
        description: "Unable to register! Email in use or something is missing!",
      },
      loading: { title: "Registration...", description: "Please wait..." },
    });
    form.reset();
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit} autoComplete="off">
      <label className={styles.label}>
        Username:
        <input type="text" name="name" required/>
      </label>
      <label className={styles.label}>
        Email:
        <input type="email" name="email" required/>
      </label>
      <label className={styles.label}>
        Password:
        <input type="password" name="password" required/>
      </label>
      <button className={styles.sign_button} type="submit">
        Sign up
      </button>
    </form>
  );
};
