import cache from "./cache.js";
import fetchJson from "./fetchJson.js";

export default async function singleLoader(id) {
    if (cache.contains(id)) {
        return cache.get(id);
    }

    return fetchJson("https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=" + id).then(res => {
        const drinks = res["drinks"][0];
        cache.set(id, drinks);
        return drinks;
    });
}