import fetchJson from "./fetchJson.js";

export default async function carouselLoader() {
    const drinks = Promise.all(
        Array.from({ length: 10 }, _ => "https://www.thecocktaildb.com/api/json/v1/1/random.php")
            .map(url => fetchJson(url))
            .reduce((acc, curr) => acc.concat(curr), [])
    ).then(drinks => drinks.map(drink => drink["drinks"][0]));

    // leaving it in incase we want to do some loading animation in the future
    // await new Promise(resolve => setTimeout(resolve, 500));
    return drinks;
}
