function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

(async function() {
    try {
        // Wait for 3 seconds before starting the script execution
        await sleep(3000);

        // Find all elements with the class expanding-icon
        const expandableIconElements = document.querySelectorAll('.expanding-icon');

        // Loop through the icon elements and trigger the click event on the parent element
        let accumulatedHeight = 0;
        for (const iconElement of expandableIconElements) {
            const parentElement = iconElement.parentElement;
            if (parentElement) {
                // Calculate the scroll position based on the accumulated height of the expanded divs
                const yOffset = window.pageYOffset;
                const elementTop = parentElement.offsetTop - accumulatedHeight;
                window.scrollTo({ top: yOffset + elementTop - window.innerHeight / 2, behavior: 'smooth' });

                // Wait for 800ms before clicking the element to account for scrolling and rendering
                await sleep(800);

                // Click the element to expand it
                parentElement.click();

                // Update the accumulated height with the height of the expanded div
                const expandedDiv = parentElement.nextElementSibling;
                if (expandedDiv) {
                    accumulatedHeight += expandedDiv.getBoundingClientRect().height;
                }
            }

            // Wait for 400ms before clicking the next element
            await sleep(400);
        }
    } catch (error) {
        console.error('An error occurred during script execution:', error);
    }
})();
