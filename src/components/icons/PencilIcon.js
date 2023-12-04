import { RiPencilFill } from "react-icons/ri";
import styles from "./PencilIcon.module.css";

const PencilIcon = ({ pencilColor }) => {
  let buttonStyle = styles.whitePencilIcon;

  switch (pencilColor) {
    case "black":
      buttonStyle = styles.blackPencilIcon;
      break;
  }

  return (
    <button className={buttonStyle}>
      <RiPencilFill size={23} />
    </button>
  );
};

export default PencilIcon;
