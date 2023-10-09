import cache from './cache.js'
import fetchJson from './fetchJson.js'

export default async function searchLoader(query) {
    if (cache.contains(query)) {
        return cache.get(query);
    }

    return fetchJson("https://www.thecocktaildb.com/api/json/v1/1/search.php?s=" + query).then(res => {
        const drinks = res["drinks"];
        cache.set(query, drinks);
        return drinks;
    });
}