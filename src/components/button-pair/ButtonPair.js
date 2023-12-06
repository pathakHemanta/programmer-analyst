import styles from "./ButtonPair.module.css";

const ButtonPair = ({ enabledValue, disabledValue, leftLabel, rightLabel }) => {
  return (
    <div className={`${styles.buttonPair}`}>
      <button
        className={`${styles.leftButton}`}
        role="button"
        aria-label={`Count ${enabledValue}`}
        aria-live="polite"
      >
        <span className={`${styles.leftCount}`}>{enabledValue}</span>
        <span>{leftLabel}</span>
      </button>
      <button
        className={`${styles.rightButton}`}
        role="button"
        aria-label={`Count ${disabledValue}`}
        aria-live="polite"
      >
        <span className={`${styles.rightCount}`}>{disabledValue}</span>
        <span>{rightLabel}</span>
      </button>
    </div>
  );
};

export default ButtonPair;
