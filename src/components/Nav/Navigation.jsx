import { NavLink } from "react-router-dom";
import styles from "./Navigation.module.css";

export const Navigation = () => {
  const isLoggedIn = true;
  return (
    <nav>
      <NavLink className={styles.link} to="/goit-react-hw-08-phonebook/" end>
        Home
      </NavLink>
      {isLoggedIn && (
        <NavLink
          className={styles.link}
          to="/goit-react-hw-08-phonebook/contacts">
          Contacts
        </NavLink>
      )}
    </nav>
  );
};
