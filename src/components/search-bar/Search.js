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
    <div className={`flex ${styles.search}`}>
      <form className="flex justify-between p-3 border-2 border-[#57534E] m-2 rounded-sm transition duration-75 sm:w-[35%] w-[70%]">
        <input
          id={id}
          type="text"
          name={name}
          onChange={onChange}
          value={value}
          className="w-[85%] focus:outline-none"
          placeholder={placeholder}
        />
        <button onClick={onClick}>
          <IoMdSearch className="" size={25}></IoMdSearch>
        </button>
      </form>
      <p className="py-5 px-1">
        Viewing {count} of {total}
      </p>
    </div>
  );
};

export default Search;
