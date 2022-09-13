/*
    Server side renderering is the process of fetching a new HTML document every time the user loads a page on the browser or when the user
    navigates to a different url within the same domain. This process requires a refresh every time the user makes a route change because
    the browser must fetch a new HTML document from the server

    Nowadays client side rendering is more commonly used. Another term for this is Single Page Application. In client side rendering the browser
    will make one initial request to the server to retrieve an HTML document. When the browser retrieves the document all stylesheets and scripts will be 
    collected as well for the entire application. When the user navigates to a different page now, a refresh is not needed. The browser can remember which page is needed
    with the brower's native Window object property - history. However, if there is data on the page the data will still need to be retrieved from the server. This new data
    will most likely be retrieved with AJAX requests to the server meaning that the page and loading and data retrieve can happen in parallel. 

    Benefits 
    - less calls to the server
    - app more responsive due to less load time
    - clear separation between client and server, the client is not dependent on the server to fetch the page, only the server is reponsible for sending data

    disadvantages
    - longer initial load
    - Not SEO friendly 

    To make the application more SEO friendly we can either do dynamic rendering which will render the application whenever it comes into contact with a web crawler
    or
    use SSR

    CSR
    1. Server sends empty HTML file with bundled javascript
    2. Browser downloads the script
    3. Once downloaded browser can start rendering and mounting the components 
    4. Page fully dynamic

    CSR downside long initial load and no SEO

    SSR
    1. Server will build out application meaning the server will fetch all the data and mount all components
    2. Send the built application to the browser and browser will start downloading the javascript
    3. Once downloaded it will then become interactable  

    SSR downside every page requires a new request to the server on every page change which slows down the application when user routes between pages

    SSG 
    1. The application fetches all the data and builds out the entire application on every build (push to master)
    2. Browser receives the application almost instantly since everything is built out already
    3. Browser downloads js 
    4. page is fully dynamic

    SSG downside every time data is modified a new build is required makes client and server dependent on each other 


    Reddit CSR

    I go to r/globaloffensive 
    r/globaloffensive will send me back an empty HTML page with a bundled js and the browser will download the script
    Once downloaded, there will be interactivity, styles, and components
    I will have to make an additional requests to any servers to fetch data on the page

    Reddit SSR
    I go to r/globaloffensive
    r/globaloffensive will send me a skeleton HTML page with all the components and styles and data but no interactivity
    browser downlaods javascript and it will become interactable


    SSR has fast initial load since we are loading the data on the server as well with all the components for the frontend
    since we load data on the server we dont have to make a request or if we do it would be like 0ms since our server has all the data

*/