
         __  __       _ _                _   ______      _                  _             
        |  \/  |     | | |              | | |  ____|    | |                | |            
        | \  / |_   _| | |_   ____ _  __| | | |__  __  _| |_ _ __ __ _  ___| |_ ___  _ __ 
        | |\/| | | | | | \ \ / / _` |/ _` | |  __| \ \/ / __| '__/ _` |/ __| __/ _ \| '__|
        | |  | | |_| | | |\ V / (_| | (_| | | |____ >  <| |_| | | (_| | (__| || (_) | |   
        |_|  |_|\__,_|_|_| \_/ \__,_|\__,_| |______/_/\_\\__|_|  \__,_|\___|\__\___/|_|   
                                                                                   
                                                                                   


Extract IPv4 addresses from Mullvad's server page

### Revision History

#### Version 0.1.0-alpha

-   Initial implementation to extract the VPN server information.
-   Issues:
    1.  Difficulty in finding the correct elements to extract IP and domain information.
    2.  Lazy loading prevented the script from capturing all data.

#### Version 0.2.0-alpha

-   Implemented a `MutationObserver` to handle dynamically loaded content.
-   Issues:
    1.  Some data was still missing due to incorrect element selection.

#### Version 0.3.0-alpha

-   Improved the element selection process using `querySelector` and text matching.
-   Issues:
    1.  Some duplicate entries were being extracted.

#### Version 0.4.0-beta

-   Added a mechanism to remove duplicate entries from the extracted data.
-   Issues:
    1.  The script still threw occasional errors due to incorrect element selection.

#### Version 0.5.0-beta

-   Fine-tuned the element selection process to avoid errors.
-   Enhanced the script's resilience against minor changes in the website's structure.
-   Issues:
    1.  Exporting the data was limited to the console.

#### Version 0.6.0-beta

-   Implemented the conversion of the unique data into CSV format.
-   Added the ability to create a downloadable CSV file and trigger the download.

#### Version 1.0.0

-   Finalized the script with all issues resolved.
-   Successfully extracts the VPN server information, handles SvelteKit's lazy loading, and provides a downloadable CSV file.
