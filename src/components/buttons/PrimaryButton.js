import { RiPencilFill } from "react-icons/ri";
import styles from "./PrimaryButton.module.css";

const PrimaryButton = () => {
  return (
    <>
      <button
        className={`flex gap-3 p-3 bg-[#501214] text-white ${styles.primaryButton}`}
      >
        Primary button
        <RiPencilFill className="inline" size={20} />
      </button>
    </>
  );
};

export default PrimaryButton;
