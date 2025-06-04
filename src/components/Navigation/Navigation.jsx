import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../../redux/auth/selectors";
import styles from "./Navigation.module.css";
const Navigation = () => {
    const isLoggedIn = useSelector(selectIsLoggedIn);

    return (
        <nav>
            <NavLink className={styles.link} to="/">Home</NavLink>
            {isLoggedIn && (
                <NavLink className={styles.link} to="/contacts">
                    Contacts
                </NavLink>
            )}
            <NavLink className={styles.link} to="/about">About Us</NavLink>
        </nav>
    );
};
export default Navigation;