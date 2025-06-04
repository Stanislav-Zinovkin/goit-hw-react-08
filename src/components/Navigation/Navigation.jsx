import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../../redux/auth/selectors";
import styles from "./Navigation.module.css";
const Navigation = () => {
    const isLoggedIn = useSelector(selectIsLoggedIn);

    return (
        <nav>
            <NavLink className={styles.link}>Home</NavLink>
            {isLoggedIn && (
                <NavLink className={styles.link} to="/contacts">
                    Contacts
                </NavLink>
            )}
            <NavLink className={styles.link}>About Us</NavLink>
        </nav>
    );
};