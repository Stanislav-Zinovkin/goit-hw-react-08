import React from "react";
import styles from "./SearchBox.module.css";
import { useDispatch, useSelector } from "react-redux";
import { changeFilter } from "../../redux/filters/slice";

const SearchBox = () => {
  const dispatch = useDispatch();
  const filterValue = useSelector(state => state.filters.name);
  const handleChange = (event) => {dispatch(changeFilter(event.target.value));};
  return (
    <div className={styles.searchContainer}>
      <div className={styles.icon}>🔍</div>
      <input
        type="text"
        value={filterValue}
        onChange={handleChange}
        placeholder="Search your contact.."
        className={styles.input}
      />
    </div>
  );
};

export default SearchBox;
