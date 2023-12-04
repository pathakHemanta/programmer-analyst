import { RiPencilFill } from "react-icons/ri";
import styles from "./PencilIcon.module.css";

const PencilIcon = ({}) => {
  return (
    <button className={`bg-[#737373] p-2 text-white ${styles.pencilIcon}`}>
      <RiPencilFill className="" size={22} />
    </button>
  );
};

export default PencilIcon;
