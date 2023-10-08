export default async function singleLoader(id) {
    console.log("singleloader called with id: " + id);
    
    return safeFetchJson("https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=" + id).then(res => {
        const drinks = res["drinks"][0];
        // console.log(drinks);
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