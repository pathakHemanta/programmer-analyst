import { RiPencilFill } from "react-icons/ri";
import styles from "./SecondaryButton.module.css";

const SecondaryButton = ({ label, displayIcon }) => {
  return (
    <button className={`${styles.secondaryButton}`}>
      {label}
      {displayIcon && <RiPencilFill size={23} />}
    </button>
  );
};

export default SecondaryButton;
