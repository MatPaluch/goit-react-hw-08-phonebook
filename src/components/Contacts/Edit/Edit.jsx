import styles from "./Edit.module.css";

export const Edit = ({ id }) => {
  return (
    <div className={styles.modal}>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            name="name"
            pattern="^[a-zA-Z '\-]+$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            autoComplete="true"
          />
        </label>
        <label>
          Phone:
          <input
            type="tel"
            name="number"
            pattern="^\+?[0-9\(\) \-]+$"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            autoComplete="true"
          />
        </label>
        <button type="submit">Done</button>
        <button type="button">Cancel</button>
      </form>
    </div>
  );
};
