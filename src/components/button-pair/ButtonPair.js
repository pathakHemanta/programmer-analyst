import styles from "./ButtonPair.module.css";

const ButtonPair = ({
  enabledValue,
  disabledValue,
  leftLabel,
  rightLabel,
  onClickLeft,
  onClickRight,
}) => {
  return (
    <div className={`${styles.buttonPair}`}>
      <button className={`${styles.leftButton}`} onClick={onClickLeft}>
        <span className={`${styles.leftCount}`}>{enabledValue}</span>
        <span>{leftLabel}</span>
      </button>
      <button className={`${styles.rightButton}`} onClick={onClickRight}>
        <span className={`${styles.rightCount}`}>{disabledValue}</span>
        <span>{rightLabel}</span>
      </button>
    </div>
  );
};

export default ButtonPair;
