function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function main() {
    try {
        // Wait for 3 seconds before starting the script execution
        await sleep(3000);

        const container = document.querySelector('div[style*="overflow-y: auto"]');
        if (!container) {
            throw new Error('Could not find the container element');
        }

        const expandableIconElements = document.querySelectorAll('.expanding-icon');
        const extractedData = [];

        for (const iconElement of expandableIconElements) {
            const parentElement = iconElement.parentElement;
            if (parentElement) {
                parentElement.scrollIntoView({ behavior: 'smooth', block: 'center' });

                // Wait for 800ms before clicking the element to account for scrolling and rendering
                await sleep(800);

                // Click the element to expand it
                parentElement.click();

                // Wait for the hidden div to appear
                await sleep(800);

                // Extract the data you want from the expanded div
                const expandedDiv = document.querySelector('.virtual-scroll-item[style=""] > div');
                if (expandedDiv) {
                    // Replace this with the actual data extraction logic
                    const domainName = expandedDiv.querySelector('.dt')?.innerText;
                    const ipv4 = expandedDiv.querySelector('.dd')?.innerText;

                    extractedData.push({ domainName, ipv4 });
                }

                // Click the element again to collapse it
                parentElement.click();

                // Wait for 400ms before clicking the next element
                await sleep(400);
            }
        }

        console.log('Extracted data:', extractedData);
    } catch (error) {
        console.error('An error occurred during script execution:', error);
    }
}

main();
