import { PiStorefrontLight } from "react-icons/pi";
import styles from "./StoreIcon.module.css";

const StoreIcon = () => {
  return (
    <button className={`${styles.storeIcon}`}>
      <PiStorefrontLight size={23} />
    </button>
  );
};

export default StoreIcon;
