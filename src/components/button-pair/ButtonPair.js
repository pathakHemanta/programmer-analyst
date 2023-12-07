import React from "react";
import styles from "./ButtonPair.module.css";

const ButtonPair = ({ leftCount, rightCount, leftLabel, rightLabel }) => {
  return (
    <div className={`${styles.buttonPair}`}>
      <button
        className={`${styles.leftButton}`}
        role="button"
        aria-label={`${leftCount} ${leftLabel}`}
        aria-live="polite"
      >
        <span className={`${styles.leftCountStyle}`} aria-live="polite">
          {leftCount}
        </span>
        <span>{leftLabel}</span>
      </button>
      <button
        className={`${styles.rightButton}`}
        role="button"
        aria-label={`${rightCount} ${rightLabel}`}
        aria-live="polite"
      >
        <span className={`${styles.rightCountStyle}`} aria-live="polite">
          {rightCount}
        </span>
        <span>{rightLabel}</span>
      </button>
    </div>
  );
};

export default ButtonPair;
