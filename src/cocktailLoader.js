export default async function cocktailLoader(id) {
    return safeFetchJson("https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=" + id).then(res => res["drinks"][0]);
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