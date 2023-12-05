import React from "react";
import PencilIcon from "../icons/PencilIcon";
import StoreIcon from "../icons/StoreIcon";
import ButtonPair from "../button-pair/ButtonPair";
import PrimaryButton from "../buttons/PrimaryButton";
import ProgramDetailCard from "../program-detail-card/ProgramDetailCard";
import styles from "./CardContainer.module.css";

const CardContainer = ({ containerHeading }) => {
  return (
    <article className={`${styles.container}`}>
      <section className={`${styles.containerNav}`}>
        <h3 className={`${styles.containerHeader}`}>{containerHeading}</h3>
        <section className={`${styles.containerButtons1}`}>
          <PencilIcon />
          <StoreIcon />
        </section>
      </section>
      <section className={`${styles.containerButtons2}`}>
        <ButtonPair
          leftLabel={"Enable Departments"}
          rightLabel={"Disable Departments"}
        />
        <PrimaryButton label={"Add Program"} displayIcon={false} />
      </section>

      <section className={`${styles.cards}`}>
        <ProgramDetailCard
          mainHeading={"Interdisciplinary Studies (MAIS|MSIS)"}
          secondaryHeading={"30.99 Undergraduate 18 years"}
          description={"Student Learning (UG)"}
        />
        <ProgramDetailCard
          mainHeading={"Interdisciplinary Studies (MAIS|MSIS)"}
          secondaryHeading={"30.99 Undergraduate 18 years"}
          description={"Student Learning (UG)"}
        />
        <ProgramDetailCard
          mainHeading={"Interdisciplinary Studies (MAIS|MSIS)"}
          secondaryHeading={"30.99 Undergraduate 18 years"}
          description={"Student Learning (UG)"}
        />
      </section>
    </article>
  );
};

export default CardContainer;
