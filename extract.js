function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function scrollToBottom() {
    const checkInterval = 500;
    let previousHeight = document.documentElement.scrollHeight;

    while (true) {
        window.scrollTo(0, document.documentElement.scrollHeight);
        await sleep(checkInterval);

        const currentHeight = document.documentElement.scrollHeight;
        if (previousHeight === currentHeight) {
            break;
        }
        previousHeight = currentHeight;
    }
}

(async function() {
    try {
        // Wait for 3 seconds before starting the script execution
        await sleep(3000);

        // Scroll to the bottom of the page to load all elements
        await scrollToBottom();

        // Find all elements with the class expanding-icon
        const expandableIconElements = document.querySelectorAll('.expanding-icon');

        // Loop through the icon elements and trigger the click event on the parent element
        for (const iconElement of expandableIconElements) {
            const parentElement = iconElement.parentElement;
            if (parentElement) {
                parentElement.scrollIntoView({ behavior: 'smooth', block: 'center' });

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
