function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function elementInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

(async function() {
    try {
        // Wait for 3 seconds before starting the script execution
        await sleep(3000);

        // Find all elements with the class expanding-icon
        const expandableIconElements = document.querySelectorAll('.expanding-icon');

        // Loop through the icon elements and trigger the click event on the parent element
        for (const iconElement of expandableIconElements) {
            const parentElement = iconElement.parentElement;
            if (parentElement) {
                // Check if the element is not in the viewport, then scroll it into view
                if (!elementInViewport(parentElement)) {
                    parentElement.scrollIntoView({ behavior: 'smooth', block: 'center' });

                    // Wait for the element to be in the viewport
                    while (!elementInViewport(parentElement)) {
                        await sleep(100);
                    }
                }

                // Wait for 800ms before clicking the element to account for scrolling and rendering
                await sleep(800);

                // Click the element to expand it
                parentElement.click();
            }

            // Wait for 400ms before clicking the next element
            await sleep(400);
        }
    } catch (error) {
        console.error('An error occurred during script execution:', error);
    }
})();
