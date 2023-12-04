import { RiPencilFill } from "react-icons/ri";
import styles from "./SecondaryButton.module.css";

const SecondaryButton = () => {
  return (
    <>
      <button
        className={`flex gap-3 p-3 bg-[#D4D4D4] ${styles.secondaryButton}`}
      >
        Secondary button
        <RiPencilFill className="inline" size={23} />
      </button>
    </>
  );
};

export default SecondaryButton;
