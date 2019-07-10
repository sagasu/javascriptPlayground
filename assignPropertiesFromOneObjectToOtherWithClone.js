var blue = {
    foo: 100,
    bar: 200
};

var red = {
    foo: 300,
}

//create new object, so modifications on it will not affect blue or red
//properties in red will overwrite properties in blue
var blueWithRed = { ...blue, ...red};