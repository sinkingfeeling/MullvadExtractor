// Find all elements with the class expanding-icon
const expandableIconElements = document.querySelectorAll('.expanding-icon');

// Loop through the icon elements and trigger the click event on the parent element
expandableIconElements.forEach(iconElement => {
    const parentElement = iconElement.parentElement;
    if (parentElement) {
        parentElement.click();
    }
});
