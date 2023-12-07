import { PiStorefrontLight } from "react-icons/pi";
import styles from "./TrashIcon.module.css";

const TrashIcon = ({ onClick, altText }) => {
  return (
    <button
      className={`${styles.storeIcon}`}
      onClick={onClick}
      role="button"
      aria-label={`Edit ${altText}`}
    >
      <PiStorefrontLight size={18} />
    </button>
  );
};

export default TrashIcon;
