class localStorage {
    constructor(){
        this.storage = {};
    }

    setItem(key, value){
        this.storage[key] = value;
    }

    getItem(key){
        return this.storage[key];
    }
}