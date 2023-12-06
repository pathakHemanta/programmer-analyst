import React from "react";
import PencilIcon from "../icons/PencilIcon";
import styles from "./ProgramDetailCard.module.css";
import SecondaryButton from "../buttons/SecondaryButton";

const ProgramDetailCard = ({
  mainHeading,
  secondaryHeading,
  description,
  onClickPencil,
  leftButtonLabel,
  onClickLeftButton,
  onClickRightButton,
  rightButtonLabel,
}) => {
  return (
    <article className={`${styles.card}`} aria-label={`${mainHeading}`}>
      <section className={`${styles.description}`}>
        <section>
          <h3 className={`${styles.descriptionH3}`}>{mainHeading}</h3>
          <h4
            className={`${styles.descriptionH4}`}
            aria-label={`${secondaryHeading}`}
          >
            {secondaryHeading}
          </h4>
          <span>{description}</span>
        </section>
        <section>
          <PencilIcon
            pencilColor={"dark"}
            onClick={onClickPencil}
            altText={mainHeading}
          />
        </section>
      </section>
      <section className={`${styles.buttons}`}>
        <SecondaryButton
          label={leftButtonLabel}
          width={"full"}
          onClick={onClickLeftButton}
        />
        <SecondaryButton
          label={rightButtonLabel}
          width={"full"}
          onClick={onClickRightButton}
        />
      </section>
    </article>
  );
};

export default ProgramDetailCard;
