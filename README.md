
         __  __       _ _                _   ______      _                  _             
        |  \/  |     | | |              | | |  ____|    | |                | |            
        | \  / |_   _| | |_   ____ _  __| | | |__  __  _| |_ _ __ __ _  ___| |_ ___  _ __ 
        | |\/| | | | | | \ \ / / _` |/ _` | |  __| \ \/ / __| '__/ _` |/ __| __/ _ \| '__|
        | |  | | |_| | | |\ V / (_| | (_| | | |____ >  <| |_| | | (_| | (__| || (_) | |   
        |_|  |_|\__,_|_|_| \_/ \__,_|\__,_| |______/_/\_\\__|_|  \__,_|\___|\__\___/|_|   
                                                                                   
                                                                                   


Extract IPv4 addresses from Mullvad's server page

Alpha Phase
Version 0.1.0-alpha:

-   Initial attempt using querySelector to find the "dd" elements containing IP addresses.
-   Issue: Extracted an empty array since it could not find the "dd" elements due to the expandable sections not being opened.

Version 0.2.0-alpha:

-   Modified the approach to first click on the expandable sections to reveal the hidden IP addresses.
-   Issue: The code did not wait for the expandable sections to open, and it still extracted an empty array.

Version 0.3.0-alpha:

-   Introduced sleep function and async/await to wait for elements to load after clicking on the expandable sections.
-   Issue: IP addresses were still not being extracted consistently.

Version 0.4.0-alpha:

-   Implemented MutationObserver to detect when the IP address elements are added to the DOM.
-   Issue: The script was capturing the IP addresses multiple times, leading to duplicated entries.

Beta Phase

Version 0.5.0-beta:

-   Fixed duplication issues by properly disconnecting the observer after extracting the data.
-   Issue: None; successfully extracted the IP addresses as an array.

Version 0.6.0-beta:

-   Extracted the IP addresses as JSON.
-   Issue: Required different output format.

Version 0.7.0-beta:

-   Extracted the IP addresses as CSV.
-   Issue: Additional data (hostname) needed to be extracted.

Version 0.8.0-beta:

-   Added hostname extraction.
-   Issue: Invalid selector error for the hostname extraction.

Version 0.9.0-beta:

-   Fixed the invalid selector error for the hostname extraction.
-   Issue: Output format needed to be adjusted.

Stable Release

Version 1.0.0:

-   Modified the script to place the hostname before the IP address in the CSV output.
-   Issue: None; successfully extracted hostname and IP address in the desired format.
