import { RiPencilFill } from "react-icons/ri";
import styles from "./PrimaryButton.module.css";

const PrimaryButton = ({ label, displayIcon }) => {
  return (
    <button className={`${styles.primaryButton}`}>
      {label}
      {displayIcon && <RiPencilFill size={23} />}
    </button>
  );
};

export default PrimaryButton;
