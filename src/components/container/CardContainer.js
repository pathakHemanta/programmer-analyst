import React from "react";
import PencilIcon from "../icons/PencilIcon";
import StoreIcon from "../icons/StoreIcon";
import ButtonPair from "../button-pair/ButtonPair";
import PrimaryButton from "../buttons/PrimaryButton";
import ProgramDetailCard from "../program-detail-card/ProgramDetailCard";
import styles from "./CardContainer.module.css";

const CardContainer = ({
  containerHeading,
  cardObjects,
  onClickPencilIcon,
  onClickStoreIcon,
  onClickPrimaryButton,
  onClickCardPencilIcon,
  onClickCardLeftButton,
  onCLickCardRightButton,
  leftCountButtonPair,
  rightCountButtonPair,
  leftLabelButtonPair,
  rightLabelButtonPair,
  primaryButtonLabel,
  cardLeftButtonLabel,
  cardRightButtonLabel,
}) => {
  return (
    <article
      className={`${styles.container}`}
      aria-label={`${containerHeading}`}
    >
      <section className={`${styles.containerNav}`}>
        <span className={`${styles.containerHeader}`}>{containerHeading}</span>
        <section className={`${styles.containerButtons1}`}>
          <PencilIcon altText={containerHeading} onClick={onClickPencilIcon} />
          <StoreIcon altText={containerHeading} onClick={onClickStoreIcon} />
        </section>
      </section>
      <section className={`${styles.containerButtons2}`}>
        <ButtonPair
          leftCount={leftCountButtonPair}
          rightCount={rightCountButtonPair}
          leftLabel={leftLabelButtonPair}
          rightLabel={rightLabelButtonPair}
        />
        <PrimaryButton
          label={primaryButtonLabel}
          displayIcon={false}
          onClick={onClickPrimaryButton}
        />
      </section>

      <section className={`${styles.cards}`}>
        {cardObjects.map((card) => (
          <ProgramDetailCard
            mainHeading={card.programName}
            secondaryHeading={card.programDuration}
            description={card.programType}
            onClickPencil={onClickCardPencilIcon}
            onClickLeftButton={onClickCardLeftButton}
            onClickRightButton={onCLickCardRightButton}
            leftButtonLabel={cardLeftButtonLabel}
            rightButtonLabel={cardRightButtonLabel}
          />
        ))}
      </section>
    </article>
  );
};

export default CardContainer;
