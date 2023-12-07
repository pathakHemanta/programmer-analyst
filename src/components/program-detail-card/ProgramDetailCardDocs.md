# ProgramDetailCard Component

The ProgramDetailCard component is used to display detailed information about a program. It includes main and secondary headings, a description, an edit icon, and two secondary buttons.

```
    @typedef {Object} ProgramDetailCardProps
    @property {string} mainHeading - The main heading/title of the program card.
    @property {string} secondaryHeading - The secondary heading or subtitle of the program card.
    @property {string} description - The detailed description or content of the program card.
    @property {function} onClickPencil - The callback function to be executed on the edit icon click.
    @property {string} leftButtonLabel - The label or text content for the left secondary button.
    @property {function} onClickLeftButton - The callback function for the left secondary button click.
    @property {string} rightButtonLabel - The label or text content for the right secondary button.
    @property {function} onClickRightButton - The callback function for the right secondary button click.


    @function ProgramDetailCard
    @param {ProgramDetailCardProps} props - The properties passed to the component.
    @returns {JSX.Element} - The rendered ProgramDetailCard component.
```

### Example 1: Basic usage with minimal content

```
    <ProgramDetailCard
    mainHeading="Program Title"
    secondaryHeading="Subtitle"
    description="Detailed program information."
    onClickPencil={() => handleEditProgram()}
    leftButtonLabel="Cancel"
    onClickLeftButton={() => handleCancel()}
    rightButtonLabel="Save"
    onClickRightButton={() => handleSave()}
    />
```

### Example 2: Customized card with additional content

```
    <ProgramDetailCard
    mainHeading="Advanced Program"
    secondaryHeading="Category: Advanced"
    description="This program offers advanced courses for experienced learners."
    onClickPencil={() => handleEditProgram()}
    leftButtonLabel="Discard"
    onClickLeftButton={() => handleDiscard()}
    rightButtonLabel="Update"
    onClickRightButton={() => handleUpdate()}
    />
```

### Accessibility Considerations:

- ARIA attributes are used to provide accessibility information.
- Proper roles and labels are assigned for screen readers.
- Interactive elements have appropriate focus and keyboard navigation.

### Styling:

- This component uses a CSS module for styling.
- Styles are defined in ProgramDetailCard.module.css.
- You can customize the appearance by modifying the styles in the CSS module.

### Future Expansion:

- Allow customization of card colors or styles through additional props.
- Introduce support for additional buttons or actions.
- Provide options for animated transitions or hover effects.

### Additional Notes:

- Ensure that the provided content is meaningful and easily understandable.
- Customize the component to fit your application's design system.
- Handle onClick events appropriately for the intended functionality.
