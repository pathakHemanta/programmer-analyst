# PencilIcon Component

The PencilIcon component represents an editable content icon, allowing users to visually identify areas that can be edited. It provides options for different pencil colors and supports a click event for interactivity.

```
    @typedef {Object} PencilIconProps
    @property {string} pencilColor - The color variant of the pencil icon ("dark" or default).
    @property {string} altText - The alternative text for accessibility purposes.
    @property {function} onClick - The callback function to be executed on icon click.

    @function PencilIcon
    @param {PencilIconProps} props - The properties passed to the component.
    @returns {JSX.Element} - The rendered PencilIcon component.
```

### Example 1: Default pencil icon with light color

```
    <PencilIcon altText="Edit" onClick={() => handleEdit()} />
```

### Example 2: Dark-colored pencil icon

```
    <PencilIcon pencilColor="dark" altText="Edit" onClick={() => handleEdit()} />
```

### Accessibility Considerations:

- ARIA attributes are used to provide accessibility information.
- The role and aria-label attributes ensure that the icon is accessible to screen readers.

### Styling:

- This component uses a CSS module for styling.
- Styles are defined in PencilIcon.module.css.
- You can customize the appearance by modifying the styles in the CSS module.

### Future Expansion:

- Allow additional customization options for icon size.
- Introduce support for different icon shapes or styles.
- Provide options for animated transitions or hover effects.

### Additional Notes:

- Ensure that the altText provided is descriptive for accessibility purposes.
- Customize the component to fit your application's design system.
- Handle onClick events appropriately for the intended functionality.
