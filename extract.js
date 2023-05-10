function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

(async function() {
    try {
        // Wait for 2 seconds before starting the script execution
        await sleep(2000);

        // Find all elements with the class expanding-icon
        const expandableIconElements = document.querySelectorAll('.expanding-icon');

        // Loop through the icon elements and trigger the click event on the parent element
        for (const iconElement of expandableIconElements) {
            const parentElement = iconElement.parentElement;
            if (parentElement) {
                // Scroll the parent element into view using window.scrollTo
                const yOffset = window.pageYOffset;
                const elementTop = parentElement.offsetTop;
                window.scrollTo({ top: yOffset + elementTop - window.innerHeight / 2, behavior: 'smooth' });

                // Wait for 500ms before clicking the element to account for scrolling and rendering
                await sleep(500);

                // Click the element to expand it
                parentElement.click();
            }

            // Wait for 200ms before clicking the next element
            await sleep(200);
        }
    } catch (error) {
        console.error('An error occurred during script execution:', error);
    }
})();
