function f() {
    {
        let x;
        {
            // okay, block scoped name
            const x = "sneaky";

            // error, const
            //x = "foo";
        }
        // okay, declared with `let`
        x = "bar";

        // error, already declared in block
        //let x = "inner";
    }
}

var z = f();


// no difference between let and var in global scope
let me = 'go'; //globally scoped
var i = 'able'; //globally scoped

// no difference between let and var in function scope
function ingWithinEstablishedParameters() {
    let terOfRecommendation = 'awesome worker!'; //function block scoped
    var sityCheerleading = 'go!'; //function block scoped
};

// var scope is function scope based, while let is block scope based
function allyIlliterate() {
    //tuce is *not* visible out here

    for( let tuce = 0; tuce < 5; tuce++ ) {
        //tuce is only visible in here (and in the for() parentheses)
    };

    //tuce is *not* visible out here
};

// var scope is function scope based, while let is block scope based
function byE40() {
    //nish *is* visible out here

    for( var nish = 0; nish < 5; nish++ ) {
        //nish is visible to the whole function
    };

    //nish *is* visible out here
};