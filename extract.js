// Find all elements with the aria-expanded attribute
const expandableElements = document.querySelectorAll('[aria-expanded]');

// Loop through the expandable elements and set aria-expanded to true
expandableElements.forEach(element => {
    element.setAttribute('aria-expanded', 'true');
    
    // Find the corresponding span with the class expanding-icon and add the rotate class
    const spanElement = element.querySelector('.expanding-icon');
    if (spanElement) {
        spanElement.classList.add('rotate');
    }
});
