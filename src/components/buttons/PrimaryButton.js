import { RiPencilFill } from "react-icons/ri";
import styles from "./PrimaryButton.module.css";

const PrimaryButton = ({ label, displayIcon, onClick }) => {
  return (
    <button className={`${styles.primaryButton}`} onClick={onClick}>
      {label}
      {displayIcon && <RiPencilFill size={20} />}
    </button>
  );
};

export default PrimaryButton;
