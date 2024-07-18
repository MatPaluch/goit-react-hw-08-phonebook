import { useDispatch, useSelector } from "react-redux";
import { selectToken, selectUser } from "../../redux/auth/selectors";
import { logOut } from "../../redux/auth/operations";

export const UserMenu = () => {
  const user = useSelector(selectUser);
  const token = useSelector(selectToken);
  const dispatch = useDispatch();

  const logOutHandler = () => {
    dispatch(logOut(token));
  };
  return (
    <div>
      <p>
        {user.name}, {user.email}
      </p>
      <button onClick={logOutHandler}>LogOut</button>
    </div>
  );
};
