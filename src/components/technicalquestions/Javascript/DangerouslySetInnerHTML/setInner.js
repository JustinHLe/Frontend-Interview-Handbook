/*
    dangerouslySetInnerHTML is an HTML attribute which allows the developer
    to dynamically set content, instead of using a HTML selector. Note this
    attribute only works with react

    The reason it's called dangerouslySetInnerHTML is because it opens the 
    application open to cross browser attacks 

    For example, fetching data from a different a different domain and 
    dangersoulySetInnerHTML with that data could cause issues if the data isn't
    safe


    dangerouslySetInnerHTML is useful when the user is giving you data
    in html format already
*/