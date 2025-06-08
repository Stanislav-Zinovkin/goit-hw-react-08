import { useDispatch, useSelector } from "react-redux";
import { logOut } from "../../redux/auth/operations";
import { selectUser} from "../../redux/auth/selectors";
import styles from "./UserMenu.module.css"
import SearchBox from "../SearchBox/SearchBox";

export const UserMenu = () => {
    const dispatch = useDispatch();
    const user = useSelector(selectUser);

    return (
        <div className={styles.wrapper}>
            
            <p className={styles.username}>Welcome, {user.name}</p>
            <button type="button" onClick={() => dispatch(logOut())}>Log Out</button>
        </div>
    );
};