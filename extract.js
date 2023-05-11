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
                            const ipElement = node.querySelector('.servers-dl .dt.no-uppercase + .dd');
                            const domainElement = Array.from(node.querySelectorAll('.servers-dl .dt')).find(el => el.textContent === "Domain name");
                            const domainText = domainElement ? domainElement.nextElementSibling.textContent : "Not found";
                            
                            if (ipElement) {
                                const ip = ipElement.innerText;
                                extractedData.push({ domain: domainText, ip });
                            } else {
                                console.warn('Could not find the IPv4 element in the expanded div:', node);
                            }
                        }
                    });
                }
            });
        });

        observer.observe(container, { childList: true, subtree: true });

        for (let i = 0; i < expandableIconElements.length; i++) {
            const iconElement = expandableIconElements[i];
            const parentElement = iconElement.parentElement;
            if (parentElement) {
                parentElement.scrollIntoView({ behavior: 'smooth', block: 'center' });

                await sleep(800);

                parentElement.click();

                await sleep(800);
            }
        }

        observer.disconnect();

        // Remove duplicate entries from extractedData
        const uniqueData = [];
        const uniqueDomains = new Set();
        for (const data of extractedData) {
            if (!uniqueDomains.has(data.domain)) {
                uniqueDomains.add(data.domain);
                uniqueData.push(data);
            }
        }

        // Convert uniqueData to CSV format
        const headers = Object.keys(uniqueData[0]).join(",");
        const csvData = uniqueData.map(obj => Object.values(obj).join(",")).join("\n");
        const csvContent = `${headers}\n${csvData}`;

        // Create a blob object from the CSV content and download it as a file
        const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
        const url = URL.createObjectURL(blob);
        const link = document.createElement("a");
        link.setAttribute("href", url);
        link.setAttribute("download", "vpn-servers.csv");
        link.style.visibility = "hidden";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);

        console.log('Data has been downloaded as a CSV file.');
    } catch (error) {
        console.error('An error occurred during script execution:', error);
    }
}

main
