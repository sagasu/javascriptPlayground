for(var i = 0; i < 3; i++){
    setTimeout( () => {
        console.log("varClosure" + i); //varClosure3 3x
    });
}

for(let j = 0; j < 3; j++){
    setTimeout( () => {
        console.log("letClosure" + j); //letClosure1 letClosure2 letClosure3
    });
}

for(let k = 0; k < 3; k++){
    setTimeout( () => {
        console.log("letIncClosure" + k); //letIncClosure1  letIncClosure3
    });
    k++;
}



{
    var realm1 = 1;
    let realm2 = 1;
    const realm3 = 1;
}
console.log("realm1" + realm1); //realm11
//console.log("realm2" + realm2); //forClosure.js:28 Uncaught ReferenceError: realm2 is not defined
//console.log("realm3" + realm3); // forClosure.js:29 Uncaught ReferenceError: realm3 is not defined