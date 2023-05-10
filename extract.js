// Find all elements with the class expanding-icon
const expandableIconElements = document.querySelectorAll('.expanding-icon');

// Loop through the icon elements and set aria-expanded to true on the parent element
expandableIconElements.forEach(iconElement => {
    // Change the aria-expanded attribute of the parent element
    const parentElement = iconElement.parentElement;
    if (parentElement) {
        parentElement.setAttribute('aria-expanded', 'true');
    }

    // Add the rotate class to the expanding-icon element
    iconElement.classList.add('rotate');
});
