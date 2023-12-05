import styles from "./ButtonPair.module.css";

const ButtonPair = ({ leftLabel, rightLabel, onClickLeft, onClickRight }) => {
  return (
    <div className={`${styles.buttonPair}`}>
      <button className={`${styles.leftButton}`} onClick={onClickLeft}>
        <span className={`${styles.leftCount}`}>1</span>
        <span>{leftLabel}</span>
      </button>
      <button className={`${styles.rightButton}`} onClick={onClickRight}>
        <span className={`${styles.rightCount}`}>2</span>
        <span>{rightLabel}</span>
      </button>
    </div>
  );
};

export default ButtonPair;
