# PrimaryButton Component

- The PrimaryButton component represents a primary action button with an optional
- icon. It is designed to be a versatile button for various interactions.

```
    @typedef {Object} PrimaryButtonProps
    @property {string} label - The label or text content of the button.
    @property {boolean} displayIcon - A flag to determine if an icon should be displayed.
    @property {function} onClick - The callback function to be executed on button click.


    @function PrimaryButton
    @param {PrimaryButtonProps} props - The properties passed to the component.
    @returns {JSX.Element} - The rendered PrimaryButton component.

```

### Example 1: Basic usage without an icon

```
    <PrimaryButton label="Submit" onClick={() => handleSubmit()} />
```

### Example 2: With an icon

```
    <PrimaryButton label="Edit" displayIcon={true} onClick={() => handleEdit()} />
```

### Accessibility Considerations:

- ARIA attributes are used to provide accessibility information.
- The role and aria-label attributes ensure that the button is accessible to screen readers.

### Styling:

- This component uses a CSS module for styling.
- Styles are defined in PrimaryButton.module.css.
- You can customize the appearance by modifying the styles in the CSS module.

### Future Expansion:

- Allow customization of button colors or styles through additional props.
- Provide support for additional icon options.
- Introduce animated transitions or hover effects.

### Additional Notes:

- Ensure that the button label is clear and actionable.
- Customize the component to fit your application's design system.
- Handle onClick events appropriately for the intended functionality.
