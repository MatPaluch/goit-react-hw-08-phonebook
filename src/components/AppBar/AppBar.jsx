import { AuthNav } from "../AuthNav/AuthNav";
import { Navigation } from "../Nav/Navigation";
import { UserMenu } from "../User/UserMenu";
import styles from "./AppBar.module.css";

export const AppBar = () => {
  const isLoggedIn = false;
  return (
    <header className={styles.header}>
      <Navigation />
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </header>
  );
};
