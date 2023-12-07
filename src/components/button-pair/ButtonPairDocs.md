# ButtonPair Component

The ButtonPair component renders a pair of buttons, each displaying a count and a label. It is designed for scenarios where users need to make a binary choice.

```
    @typedef {Object} ButtonPairProps
    @property {number} leftCount - The count for the left button.
    @property {number} rightCount - The count for the right button.
    @property {string} leftLabel - The label for the left button.
    @property {string} rightLabel - The label for the right button.

    @function ButtonPair
    @param {ButtonPairProps} props - The properties passed to the component.
    @returns {JSX.Element} - The rendered ButtonPair component.
```

### Example 1: Basic usage

```
    <ButtonPair
        leftCount={5}
        rightCount={8}
        leftLabel="Yes"
        rightLabel="No"
    />
```

### Example 2: Custom labels and counts

```
    <ButtonPair
        leftCount={10}
        rightCount={15}
        leftLabel="Agree"
        rightLabel="Disagree"
    />

```

### Accessibility Considerations:

- ARIA attributes are used to provide accessibility information.
- Buttons have appropriate roles and labels for screen readers.
- Live regions are used to announce dynamic content changes.

### Styling:

- This component uses a CSS module for styling.
- Styles are defined in ButtonPair.module.css.
- You can customize the appearance by modifying the styles in the CSS module.

### Future Expansion:

- Allow customization of button icons for each option.
- Introduce support for additional button styles.
- Provide options for dynamic color themes.

### Additional Notes:

- Ensure that the count and label values provided are meaningful to users.
- Customize the component to fit your application's design system.
