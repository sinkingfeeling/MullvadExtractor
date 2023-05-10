function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

(async function() {
    // Find all elements with the class expanding-icon
    const expandableIconElements = document.querySelectorAll('.expanding-icon');

    // Loop through the icon elements and trigger the click event on the parent element
    for (const iconElement of expandableIconElements) {
        const parentElement = iconElement.parentElement;
        if (parentElement) {
            // Scroll the parent element into view
            parentElement.scrollIntoView({ behavior: 'smooth', block: 'center' });

            // Wait for 500ms before clicking the element to account for scrolling and rendering
            await sleep(500);

            // Click the element to expand it
            parentElement.click();
        }

        // Wait for 200ms before clicking the next element
        await sleep(200);
    }
})();
