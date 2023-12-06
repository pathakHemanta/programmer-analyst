import React from "react";
import { IoMdSearch } from "react-icons/io";
import styles from "./Search.module.css";

const Search = ({
  id,
  name,
  placeholder,
  onChange,
  value,
  onClick,
  count,
  total,
}) => {
  return (
    <div className={`${styles.search}`}>
      <form
        className={`${styles.searchBar}`}
        role="search"
        aria-label={`Search ${placeholder}`}
      >
        <input
          id={id}
          type="text"
          name={name}
          onChange={onChange}
          value={value}
          className={`${styles.searchValue}`}
          placeholder={placeholder}
          aria-label={`Enter ${placeholder}`}
        />
        <button
          onClick={onClick}
          className={`${styles.searchIcon}`}
          role="button"
          aria-label="Search Button"
        >
          <IoMdSearch size={20}></IoMdSearch>
        </button>
      </form>
      <p className={`${styles.helper}`} role="status" aria-live="polite">
        Viewing {count} of {total}
      </p>
    </div>
  );
};

export default Search;
