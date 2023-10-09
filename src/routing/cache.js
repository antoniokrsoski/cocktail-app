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
        if (this.nbrItems > 10) {
            this.clear();
        }
        this.nbrItems++;
        this.cache[key] = value;
        localStorage.setItem("cache", JSON.stringify(this.cache));
    }

    clear() {
        localStorage.removeItem("cache");
        this.nbrItems = 0;
    }
}

export default new Cache();