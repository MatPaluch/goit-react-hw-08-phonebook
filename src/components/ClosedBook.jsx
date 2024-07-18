import { useDispatch } from "react-redux";
import { checkIsLoggedIn } from "../redux/auth/operations";

export const ClosedBook = () => {
  const dispatch = useDispatch();
  const handler = () => {
    dispatch(checkIsLoggedIn());
  };
  return (
    <main className="sectionHome">
      <div className="closedBook">
        <h1>Your Personal Phonebook!</h1>
        <button onClick={handler}>Check if u are Logged In</button>
      </div>
    </main>
  );
};
