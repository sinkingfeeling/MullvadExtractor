function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function main() {
    try {
        await sleep(3000);

        const container = document.querySelector('div[style*="overflow-y: auto"]');
        if (!container) {
            throw new Error('Could not find the container element');
        }

        const expandableIconElements = document.querySelectorAll('.expanding-icon');
        const extractedData = [];

        const observer = new MutationObserver((mutations) => {
            mutations.forEach((mutation) => {
                if (mutation.type === 'childList') {
                    mutation.addedNodes.forEach((node) => {
                        if (node.nodeType === Node.ELEMENT_NODE && node.querySelector('.servers-dl')) {
                            const hostnameElement = node.querySelector('.servers-dl .dt:contains("Domain name") + .dd');
                            const ipElement = node.querySelector('.servers-dl .dt.no-uppercase + .dd');
                            if (hostnameElement && ipElement) {
                                const hostname = hostnameElement.innerText;
                                const ip = ipElement.innerText;
                                extractedData.push({ hostname, ip });
                            } else {
                                console.warn('Could not find the hostname or IPv4 element in the expanded div:', node);
                            }
                        }
                    });
                }
            });
        });

        observer.observe(container, { childList: true, subtree: true });

        for (const iconElement of expandableIconElements) {
            const parentElement = iconElement.parentElement;
            if (parentElement) {
                parentElement.scrollIntoView({ behavior: 'smooth', block: 'center' });

                await sleep(800);

                parentElement.click();

                await sleep(800);

                parentElement.click();

                await sleep(400);
            }
        }

        observer.disconnect();

        // Export data as CSV
        const csvContent = extractedData.map(({ hostname, ip }) => `${hostname},${ip}`).join('\n');
        console.log('Extracted data as CSV:\n' + csvContent);

    } catch (error) {
        console.error('An error occurred during script execution:', error);
    }
}

main();
