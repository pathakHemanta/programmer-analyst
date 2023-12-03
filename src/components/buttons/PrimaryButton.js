import React from "react";
import { RiPencilFill } from "react-icons/ri";
import "./PrimaryButton.module.css";

const PrimaryButton = () => {
  return (
    <div>
      <button>
        Primary button
        <RiPencilFill className="inline" />
      </button>
    </div>
  );
};

export default PrimaryButton;
