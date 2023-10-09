export default async function searchLoader(query) {
    console.log("searchLoader called with query: " + query);
    
    return safeFetchJson("https://www.thecocktaildb.com/api/json/v1/1/search.php?s=" + query).then(res => {
        const drinks = res["drinks"];
        // cache em
        return drinks;
    });
}

async function safeFetchJson(url) {
    return fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error(`${url} returned status ${response.status}`);
            }
            return response.json();
        });
}