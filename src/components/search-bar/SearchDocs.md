# Search Component

The Search component provides a search bar with an input field, search icon, and status helper. It allows users to input search queries, trigger search actions, and displays the search status.

```
    @typedef {Object} SearchProps
    @property {string} id - The unique identifier for the search input.
    @property {string} name - The name attribute for the search input.
    @property {string} placeholder - The placeholder text for the search input.
    @property {function} onChange - The callback function to be executed on input change.
    @property {string} value - The current value of the search input.
    @property {function} onClick - The callback function to be executed on search button click.
    @property {number} count - The number of items currently displayed or filtered.
    @property {number} total - The total number of items available in the dataset.

    @function Search
    @param {SearchProps} props - The properties passed to the component.
    @returns {JSX.Element} - The rendered Search component.
```

### Example 1: Basic usage with default placeholder

```
    <Search
    id="searchInput"
    name="search"
    placeholder="Search..."
    onChange={(e) => handleSearchChange(e)}
    value={searchQuery}
    onClick={() => handleSearch()}
    count={filteredItemCount}
    total={totalItemCount}
    />
```

### Example 2: Customized search with specific placeholder and initial value

```
    <Search
    id="customSearch"
    name="customSearch"
    placeholder="Filter by name..."
    onChange={(e) => handleCustomSearchChange(e)}
    value={customSearchQuery}
    onClick={() => handleCustomSearch()}
    count={customFilteredCount}
    total={customTotalCount}
    />
```

### Accessibility Considerations:

- ARIA attributes are used to provide accessibility information.
- The role and aria-label attributes ensure that the search bar is accessible to screen readers.
- The status helper includes live region attributes for dynamic content updates.

### Styling:

- This component uses a CSS module for styling.
- Styles are defined in Search.module.css.
- You can customize the appearance by modifying the styles in the CSS module.

### Future Expansion:

- Allow customization of the search icon or additional icons.
- Provide options for different input styles or themes.
- Introduce support for advanced search features.

### Additional Notes:

- Ensure that the search functionality aligns with user expectations.
- Customize the component to fit your application's design system.
- Handle onClick and onChange events appropriately for the intended functionality.
