# NavigationBar Component

The NavigationBar component is a customizable navigation bar that allows users to navigate between different sections of the application. It includes buttons for menu toggling, heading navigation, user profile, and a back button with label.

```
    @typedef {Object} NavigationBarProps
    @property {string} pageLabel - The label for the current page.
    @property {string} userInitials - Initials or avatar for the user profile.
    @property {string} secondaryHeading - The label for the secondary navigation section.
    @property {function} onClickMenuButton - Event handler for the menu button click.
    @property {function} onClickHeadingButton - Event handler for the heading button click.
    @property {function} onClickUserInitialsButton - Event handler for the user profile button click.
    @property {function} onClickBackButton - Event handler for the back button click.

    @function NavigationBar
    @param {NavigationBarProps} props - The properties passed to the component.
    @returns {JSX.Element} - The rendered NavigationBar component.
```

### Example 1: Basic usage

```
    <NavigationBar
        pageLabel="Dashboard"
        userInitials="JD"
        secondaryHeading="Back"
        onClickMenuButton={() => handleMenuToggle()}
        onClickHeadingButton={() => handleHeadingClick()}
        onClickUserInitialsButton={() => handleUserProfileClick()}
        onClickBackButton={() => handleGoBack()}
    />
```

### Example 2: Custom page label and secondary heading

```
    <NavigationBar
        pageLabel="Settings"
        userInitials="AH"
        secondaryHeading="Main Menu"
        onClickMenuButton={() => openMainMenu()}
        onClickHeadingButton={() => goToSettings()}
        onClickUserInitialsButton={() => openUserProfile()}
        onClickBackButton={() => handleGoBack()}
    />
```

### Accessibility Considerations:

- ARIA attributes are used to provide accessibility information.
- Buttons have appropriate roles and labels for screen readers.
- Live regions are used to announce dynamic content changes.

### Styling:

- This component uses a CSS module for styling.
- Styles are defined in NavigationBar.module.css.
- You can customize the appearance by modifying the styles in the CSS module.

### Future Expansion:

- Allow customization of button icons for menu and heading navigation.
- Introduce support for additional navigation buttons.
- Provide options for dynamic color themes.

### Additional Notes:

- Ensure that the onClick event handlers provided are responsive to user interactions.
- Customize the user profile button to match your application's user authentication system.
