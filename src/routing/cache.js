class Cache {
    constructor() {
        let cache = localStorage.getItem("cache") ?? JSON.stringify({});
        if (cache === "[object Object]") {
            cache = {};
            localStorage.setItem("cache", JSON.stringify(cache));
        }
        this.nbrItems = Object.keys(cache).length;
    }

    cache() {
        return JSON.parse(localStorage.getItem("cache"));
    }

    contains(key) {
        return key in this.cache;
    }

    get(key) {
        return this.cache[key];
    }

    set(key, value) {
        // we do not want to store to much 
        if (this.nbrItems > 50) {
            this.clear();
        }
        this.nbrItems++;
        this.cache[key] = value;
        if (Array.isArray(value)) {
            // this could go over limit but it should be fine as it is not a lot of data per item
            value.forEach(item => this.cache[item.idDrink] = item); 
        }
        localStorage.setItem("cache", JSON.stringify(this.cache));
    }

    clear() {
        localStorage.removeItem("cache");
        this.nbrItems = 0;
    }
}

export default new Cache();