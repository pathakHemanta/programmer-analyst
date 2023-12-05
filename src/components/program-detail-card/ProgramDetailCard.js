import React from "react";
import PencilIcon from "../icons/PencilIcon";
import styles from "./ProgramDetailCard.module.css";
import SecondaryButton from "../buttons/SecondaryButton";

const ProgramDetailCard = ({
  mainHeading,
  secondaryHeading,
  description,
  onClickPencil,
}) => {
  return (
    <article className={`${styles.card}`}>
      <section className={`${styles.description}`}>
        <section>
          <h3 className={`${styles.descriptionH3}`}>{mainHeading}</h3>
          <h4 className={`${styles.descriptionH4}`}>{secondaryHeading}</h4>
          <span>{description}</span>
        </section>
        <section>
          <PencilIcon pencilColor={"dark"} onClick={onClickPencil} />
        </section>
      </section>
      <section className={`${styles.buttons}`}>
        <SecondaryButton label={"Manage Users"} width={"full"} />
        <SecondaryButton label={"Disable"} width={"full"} />
      </section>
    </article>
  );
};

export default ProgramDetailCard;
