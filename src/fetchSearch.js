export default function fetchSearch(event, setter, query) {
    event.preventDefault();
    event.stopPropagation();
    console('fetch search');
    
    if (query === "") {
        setter(true);
        
    } else {
        // go naviage to search page
        // https://www.thecocktaildb.com/api/json/v1/1/search.php?s=
        fetch("https://www.thecocktaildb.com/api/json/v1/1/search.php?s=" + query).then(res => res.json()).then(data => console.log(data));
    }
}
