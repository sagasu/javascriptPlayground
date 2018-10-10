function patternMatch([a,b]){
    console.log(a);
    console.log(b);
}

patternMatch(["head", "tail"]);

function patternMatch1([a,b], c){
    console.log(a);
    console.log(b);
    console.log(c);
}

patternMatch1(["head", "tail"], "outsideArrayExtra"); //"head", "tail", "outsideArrayExtra"

patternMatch1(["head", "tail", "inArrayExtra"]); //"head", "tail", undefined

function patternMatch2([a,b,c]){
    console.log(a);
    console.log(b);
    console.log(c);
}

patternMatch1(["head", "tail"], "outsideArrayExtra2"); //"head", "tail", "outsideArrayExtra2"