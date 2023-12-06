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
        role="searchbox"
        aria-label="Search"
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
          aria-label="Search Button"
        >
          <IoMdSearch size={20}></IoMdSearch>
        </button>
      </form>
      <p className={`${styles.helper}`} role="status" aria-live="assertive">
        Viewing {count} of {total}
      </p>
    </div>
  );
};

export default Search;
