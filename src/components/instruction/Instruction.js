import React from "react";
import styles from "./Instruction.module.css";

const Instruction = () => {
  return (
    <div className={`${styles.box}`}>
      <p className={`${styles.heading}`}>
        Announced Content for assistive technologies
      </p>
      <ol className={`${styles.list}`}>
        <li>Edit {"{department name}"}</li>
        <li>Edit {"{department name}"}</li>
        <li>Edit {"{program name}"}</li>
      </ol>
    </div>
  );
};

export default Instruction;
