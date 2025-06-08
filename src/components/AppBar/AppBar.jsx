import Navigation from "../Navigation/Navigation";
import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../../redux/auth/selectors";
import styles from "./AppBar.module.css";
import {UserMenu} from "../UserMenu/UserMenu";
import { AuthNav } from "../AuthNav/AuthNav";
import SearchBox from "../SearchBox/SearchBox";

export const AppBar = () => {
    const isLoggedIn = useSelector(selectIsLoggedIn);

    return(
        <header className={styles.header}>
            
            <Navigation />
            {isLoggedIn ? (<><SearchBox/> 
                              <UserMenu /></>):( <AuthNav />)}
        </header>
    )

}