async function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function waitForElement(selector, parentElement, timeout = 5000) {
  const startTime = Date.now();
  while (Date.now() - startTime < timeout) {
    const element = parentElement.querySelector(selector);
    if (element) return element;
    await sleep(100);
  }
  throw new Error(`Element not found within ${timeout}ms: ${selector}`);
}

async function main() {
  const expandIcons = document.querySelectorAll('.expand-icon');
  const extractedIPs = [];

  for (const icon of expandIcons) {
    icon.scrollIntoView({ behavior: 'smooth', block: 'center' });
    icon.click();

    const parentElement = icon.closest('.virtual-scroll-item');
    const expandedDiv = await waitForElement('.expanded', parentElement);

    if (!expandedDiv) {
      console.error('Could not find the expanded div');
      continue;
    }

    const ipv4Element = expandedDiv.querySelector('.servers-dl > div > .dd');
    if (!ipv4Element) {
      console.error('Could not find the IPv4 element in the expanded div: ', expandedDiv);
      continue;
    }

    const ipv4 = ipv4Element.textContent.trim();
    extractedIPs.push(ipv4);
  }

  console.log('Extracted IP addresses: ', extractedIPs);
}

main();
