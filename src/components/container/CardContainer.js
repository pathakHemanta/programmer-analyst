import React from "react";
import PencilIcon from "../icons/PencilIcon";
import StoreIcon from "../icons/StoreIcon";
import ButtonPair from "../button-pair/ButtonPair";
import PrimaryButton from "../buttons/PrimaryButton";
import ProgramDetailCard from "../program-detail-card/ProgramDetailCard";
import styles from "./CardContainer.module.css";

const CardContainer = ({ containerHeading }) => {
  return (
    <article
      className={`${styles.container}`}
      aria-label={`${containerHeading}`}
    >
      <section className={`${styles.containerNav}`}>
        <span className={`${styles.containerHeader}`}>{containerHeading}</span>
        <section className={`${styles.containerButtons1}`}>
          <PencilIcon />
          <StoreIcon />
        </section>
      </section>
      <section className={`${styles.containerButtons2}`}>
        <ButtonPair
          enabledValue={3}
          disabledValue={0}
          leftLabel={"Enable"}
          rightLabel={"Disable"}
        />
        <PrimaryButton label={"Add Program"} displayIcon={false} />
      </section>

      <section className={`${styles.cards}`}>
        <ProgramDetailCard
          mainHeading={"Interdisciplinary Studies (MAIS|MSIS)"}
          secondaryHeading={"30.99 Undergraduate 11 years"}
          description={"Student Learning (GR)"}
          leftButtonLabel={"Manage Users"}
          rightButtonLabel={"Disable"}
        />
        <ProgramDetailCard
          mainHeading={"Applied Arts and Sciences (BAAS)"}
          secondaryHeading={"30.99 Undergraduate 18 years"}
          description={"Student Learning (UG)"}
          leftButtonLabel={"Manage Users"}
          rightButtonLabel={"Disable"}
        />
        <ProgramDetailCard
          mainHeading={"Management of Technical Education (MEd)"}
          secondaryHeading={"13.13 Undergraduate 18 years"}
          description={"Student Learning (GR)"}
          leftButtonLabel={"Manage Users"}
          rightButtonLabel={"Disable"}
        />
      </section>
    </article>
  );
};

export default CardContainer;
