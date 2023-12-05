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
      <form className={`${styles.searchBar}`}>
        <input
          id={id}
          type="text"
          name={name}
          onChange={onChange}
          value={value}
          className={`${styles.searchValue}`}
          placeholder={placeholder}
        />
        <button onClick={onClick}>
          <IoMdSearch size={25}></IoMdSearch>
        </button>
      </form>
      <p className={`${styles.helper}`}>
        Viewing {count} of {total}
      </p>
    </div>
  );
};

export default Search;
