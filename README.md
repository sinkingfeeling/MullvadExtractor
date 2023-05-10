# MullvadExtractor
Extract IPv4 addresses from Mullvad's server page

1.  Version 0.1.0:

-   Initial attempt using querySelector to find the "dd" elements containing IP addresses.
-   Issue: Extracted an empty array since it could not find the "dd" elements due to the expandable sections not being opened.

2.  Version 0.2.0:

-   Modified the approach to first click on the expandable sections to reveal the hidden IP addresses.
-   Issue: The code did not wait for the expandable sections to open, and it still extracted an empty array.

3.  Version 0.3.0:

-   Introduced sleep function and async/await to handle delays between clicks and extraction.
-   Issue: The code successfully expanded the sections but did not extract the IP addresses.

4.  Version 0.4.0:

-   Used MutationObserver to monitor the DOM changes and extract IP addresses when the expandable sections were opened.
-   Issue: It extracted all information but the desired IPv4 addresses.

5.  Version 0.5.0:

-   Improved the selector to specifically target the IPv4 addresses.
-   Issue: It extracted the IPv4 addresses but with duplicates.

6.  Version 0.6.0:

-   Added a Set to store extracted IP addresses to eliminate duplicates.
-   Issue: Although the code worked, it still occasionally logged a warning when it could not find the IPv4 element in the expanded div.

7.  Version 0.7.0:

-   Introduced the option to export the extracted data in either CSV or JSON format.

8.  Version 1.0.0:

-   Code optimization to improve reliability in extracting unique IP addresses and providing output in CSV or JSON format without duplication.

This is the final version that works as expected and provides the desired output.
