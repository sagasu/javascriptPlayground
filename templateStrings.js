// Please notice that strings are being created by ` and not "

// Basic literal string creation
`This is a pretty little template string.`
    
// Multiline strings
console.log(`In ES5 this is
 not legal.`);

// Interpolate variable bindings
var name = "Bob", time = "today";
`Hello ${name}, how are you ${time}?`

// Unescaped template strings
String.raw`In ES5 "\n" is a line-feed.`
