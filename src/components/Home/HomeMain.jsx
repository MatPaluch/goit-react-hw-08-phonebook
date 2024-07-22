import styles from "./Home.module.css";
import arrow from "../../assets/redArrow.png";
import phonebook from "../../assets/phonebookImage.jpg";
import imgAddContact from "../../assets/exampleAddContact.png";
import imgEditContact from "../../assets/exampleEditContact.png";
import { Link } from "react-router-dom";

export const HomeMain = () => {
  return (
    <div className={styles.mainDiv}>
      <h1 className={styles.h1}>This is Your personal PhoneBook</h1>
      <span className={styles.tryMe}>Try me!</span>
      <img className={styles.arrow} src={arrow} alt="arrowImage" />
      <img className={styles.phoneBook} src={phonebook} alt="phonebookImage" />
      <div className={styles.stepList}>
        <h4 className={styles.textHeader}>First what you need to:</h4>
        <ul className={styles.list}>
          <li>
            <Link to="./register" className={styles.link}>
              Register
            </Link>{" "}
            Yourself :D
          </li>
          <li>
            Next step{" "}
            <Link to="./login" className={styles.link}>
              LogIn
            </Link>
          </li>
          <li>Now you are ready to Add Contacts!</li>
        </ul>
      </div>
      <div className={styles.exampleDiv}>
        <h4 className={styles.textHeader}>Example:</h4>
        <ul className={styles.exampleList}>
          <li className={styles.add}>
            Adding Contact
            <img src={imgAddContact} className={styles.imgAddContact} />
          </li>
          <li className={styles.edit}>
            Editing Contact
            <img src={imgEditContact} className={styles.imgEditContact} />
          </li>
        </ul>
      </div>
    </div>
  );
};
