# CardContainer Component

The CardContainer component serves as a container for displaying a collection of program detail cards.
It includes a container header, edit and disable buttons, count buttons with ButtonPair , a primary action button, and a grid of ProgramDetailCard components.

```
    @typedef {Object} CardContainerProps
    @property {string} containerHeading - The main heading/title for the card container.
    @property {Array} cardObjects - An array of objects containing data for individual program detailcards.
    @property {function} onClickPencilIcon - The callback function to be executed on the container'spencil icon click.
    @property {function} onClickStoreIcon - The callback function to be executed on the container's trashicon click.
    @property {function} onClickPrimaryButton - The callback function to be executed on the primary buttonclick.
    @property {function} onClickCardPencilIcon - The callback function to be executed on a card's pencilicon click.
    @property {function} onClickCardLeftButton - The callback function to be executed on a card's leftbutton click.
    @property {function} onCLickCardRightButton - The callback function to be executed on a card's rightbutton click.
    @property {string} leftCountButtonPair - The count for the left button pair in the card container.@property {string} rightCountButtonPair - The count for the right button pair in the card container.
    @property {string} leftLabelButtonPair - The label for the left button pair in the card container.
    @property {string} rightLabelButtonPair - The label for the right button pair in the card container.
    @property {string} primaryButtonLabel - The label for the primary action button in the card container.
    @property {string} cardLeftButtonLabel - The label for the left button on each individual programdetail card.
    @property {string} cardRightButtonLabel - The label for the right button on each individual programdetail card.

    @function CardContainer
    @param {CardContainerProps} props - The properties passed to the component.
    @returns {JSX.Element} - The rendered CardContainer component.
```

### Example 1: Basic usage with default data

```
    <CardContainer
        containerHeading="Programs Overview"
        cardObjects={[
            { programName: "Program A", programDuration: "3 months", programType: "Online" },
            { programName: "Program B", programDuration: "6 months", programType: "In-person" },
        ]}
        onClickPencilIcon={() => handleContainerEdit()}
        onClickStoreIcon={() => handleContainerDelete()}
        onClickPrimaryButton={() => handleContainerPrimaryAction()}
        onClickCardPencilIcon={() => handleCardEdit()}
        onClickCardLeftButton={() => handleCardLeftAction()}
        onCLickCardRightButton={() => handleCardRightAction()}
        leftCountButtonPair="10"
        rightCountButtonPair="20"
        leftLabelButtonPair="Left Action"
        rightLabelButtonPair="Right Action"
        primaryButtonLabel="Add New Program"
        cardLeftButtonLabel="Cancel"
        cardRightButtonLabel="Save"
    />
```

### Example 2: Customized container with specific data and actions

```
    <CardContainer
        containerHeading="Special Programs"
        cardObjects={[
            { programName: "Special Program X", programDuration: "2 months", programType: "Hybrid" },
            { programName: "Special Program Y", programDuration: "4 months", programType: "Virtual" },
        ]}
        onClickPencilIcon={() => handleSpecialContainerEdit()}
        onClickStoreIcon={() => handleSpecialContainerDelete()}
        onClickPrimaryButton={() => handleSpecialContainerPrimaryAction()}
        onClickCardPencilIcon={() => handleSpecialCardEdit()}
        onClickCardLeftButton={() => handleSpecialCardLeftAction()}
        onCLickCardRightButton={() => handleSpecialCardRightAction()}
        leftCountButtonPair="5"
        rightCountButtonPair="15"
        leftLabelButtonPair="Special Left Action"
        rightLabelButtonPair="Special Right Action"
        primaryButtonLabel="Create Special Program"
        cardLeftButtonLabel="Discard"
        cardRightButtonLabel="Update"
    />
```

### Accessibility Considerations:

- ARIA attributes are used to provide accessibility information.
- Proper roles and labels are assigned for screen readers.
- Interactive elements have appropriate focus and keyboard navigation.

### Styling:

- This component uses a CSS module for styling.
- Styles are defined in CardContainer.module.css.
- You can customize the appearance by modifying the styles in the CSS module.

### Future Expansion:

- Allow customization of card container colors or styles through additional props.
- Introduce support for additional buttons or actions.
- Provide options for animated transitions or hover effects.

### Additional Notes:

- Ensure that the provided data aligns with the expected structure.
- Customize the component to fit your application's design system.
- Handle onClick events appropriately for the intended functionality.
