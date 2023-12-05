import { RiPencilFill } from "react-icons/ri";
import styles from "./SecondaryButton.module.css";

const SecondaryButton = ({ label, displayIcon, width, onClick }) => {
  let buttonStyle = width == "full" ? { width: "100%" } : {};

  return (
    <button
      className={`${styles.secondaryButton}`}
      style={buttonStyle}
      onClick={onClick}
    >
      {label}
      {displayIcon && <RiPencilFill size={23} />}
    </button>
  );
};

export default SecondaryButton;
