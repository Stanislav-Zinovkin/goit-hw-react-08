import React from "react";
import {PacmanLoader} from "react-spinners"
import styles from "./Loader.module.css"
const Loader = ({loading}) => {
    return(
        <div className={styles.loader}>
            {loading && (<PacmanLoader loading={loading} size={25} color="purple"/>)}
        </div>
    );
};
export default Loader;