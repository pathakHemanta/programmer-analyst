import { PiStorefrontLight } from "react-icons/pi";
import styles from "./StoreIcon.module.css";

const StoreIcon = ({ onClick }) => {
  return (
    <button className={`${styles.storeIcon}`} onClick={onClick}>
      <PiStorefrontLight size={23} />
    </button>
  );
};

export default StoreIcon;
