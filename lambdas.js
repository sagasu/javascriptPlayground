var foo = () => {
    return 1 + 2;
}

var bar = {
    get: () => {
        return 4 + 4;
    }
}

console.log("from lambda foo " + foo());
console.log("from lambda bar " + bar.get());