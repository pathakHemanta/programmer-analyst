# SecondaryButton Component

The SecondaryButton component represents a secondary action button with optional
customization for label, icon, and width. It is designed to complement primary
actions in a user interface.

```
    @typedef {Object} SecondaryButtonProps
    @property {string} label - The label or text content of the button.
    @property {boolean} displayIcon - A flag to determine if an icon should be displayed.
    @property {string} width - The width of the button. Use "full" for 100% width.
    @property {function} onClick - The callback function to be executed on button click.

    @function SecondaryButton
    @param {SecondaryButtonProps} props - The properties passed to the component.
    @returns {JSX.Element} - The rendered SecondaryButton component.

```

### Example 1: Basic usage without an icon

```

    <SecondaryButton label="Cancel" onClick={() => handleCancel()} />
```

### Example 2: With an icon and full width

```
    <SecondaryButton label="Edit" displayIcon={true} width="full" onClick={() => handleEdit()} />
```

### Accessibility Considerations:

- ARIA attributes are used to provide accessibility information.
- The role and aria-label attributes ensure that the button is accessible to screen readers.

### Styling:

- This component uses a CSS module for styling.
- Styles are defined in SecondaryButton.module.css.
- You can customize the appearance by modifying the styles in the CSS module.

### Future Expansion:

- Allow customization of button colors or styles through additional props.
- Provide support for additional icon options.
- Introduce animated transitions or hover effects.

### Additional Notes:

- Ensure that the button label is clear and complements primary actions.
- Customize the component to fit your application's design system.
- Handle onClick events appropriately for the intended functionality.
