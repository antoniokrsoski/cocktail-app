export default async function searchLoader(query) {
    return safeFetchJson("https://www.thecocktaildb.com/api/json/v1/1/search.php?s=" + query).then(res => res["drinks"]);
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