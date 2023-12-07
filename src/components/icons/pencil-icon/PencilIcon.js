import { RiPencilFill } from "react-icons/ri";
import styles from "./PencilIcon.module.css";

const PencilIcon = ({ pencilColor, altText, onClick }) => {
  let buttonStyle = styles.whitePencilIcon;

  switch (pencilColor) {
    case "dark":
      buttonStyle = styles.blackPencilIcon;
      break;
  }

  return (
    <button
      className={buttonStyle}
      onClick={onClick}
      role="button"
      aria-label={`Edit ${altText}`}
    >
      <RiPencilFill size={18} />
    </button>
  );
};

export default PencilIcon;
