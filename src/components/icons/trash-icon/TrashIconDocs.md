# TrashIcon Component

The TrashIcon component represents an icon for delete or disable actions. It allows users to visually identify areas related to deleting or disabling items.

```
    @typedef {Object} TrashIconProps
    @property {function} onClick - The callback function to be executed on icon click.
    @property {string} altText - The alternative text for accessibility purposes.


    @function TrashIcon
    @param {TrashIconProps} props - The properties passed to the component.
    @returns {JSX.Element} - The rendered TrashIcon component.
```

### Example 1: Basic usage with default size

```
    <TrashIcon altText="Delete" onClick={() => handleDeleteClick()} />
```

### Example 2: Custom size and additional styling

```
    <TrashIcon altText="Disable" onClick={() => disableItem()} />
```

### Accessibility Considerations:

- ARIA attributes are used to provide accessibility information.
- The role and aria-label attributes ensure that the icon is accessible to screen readers.

### Styling:

- This component uses a CSS module for styling.
- Styles are defined in TrashIcon.module.css.
- You can customize the appearance by modifying the styles in the CSS module.

### Future Expansion:

- Allow additional customization options for icon size.
- Introduce support for different icon shapes or styles.
- Provide options for animated transitions or hover effects.

### Additional Notes:

- Ensure that the altText provided is descriptive for accessibility purposes.
- Customize the component to fit your application's design system.
- Handle onClick events appropriately for the intended functionality.
