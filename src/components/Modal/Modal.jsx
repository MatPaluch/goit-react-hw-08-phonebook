import ReactDOM from "react-dom";
import styles from "./Modal.module.css";

const PopupWindow = ({ show, idFromButton }) => {
  return ReactDOM.createPortal(
    show && (
      <div className={styles.modal}>
        <div className={styles.modalBox}>
          <h3>Edit Contact</h3>
          {idFromButton}
          <form className={styles.form}>
            <label className={styles.label}>
              Name
              <input
                type="text"
                name="name"
                pattern="^[a-zA-Z '\-]+$"
                title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                required
                autoComplete="true"
              />
            </label>
            <label className={styles.label}>
              Phone
              <input
                type="tel"
                name="number"
                pattern="^\+?[0-9\(\) \-]+$"
                title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                required
                autoComplete="true"
              />
            </label>
            <button type="submit" className={styles.done}>
              Done
            </button>
            <button type="button" className={styles.cancel}>
              Cancel
            </button>
          </form>
        </div>
      </div>
    ),
    document.querySelector("#popup-root"),
  );
};

export default PopupWindow;
