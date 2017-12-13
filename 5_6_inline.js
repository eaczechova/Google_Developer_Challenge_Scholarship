/*
 * Programming Quiz: Inline Functions (5-6)
 */

// don't change this code
function emotions(myString, myFunc) {
    console.log("I am " + myString + ", " + myFunc(2));
}

// your code goes here
// call the emotions function here and pass in an
// inline function expression



emotions("happy", function(n) {
    var x = "ha";
    var y = "";
    for (var i = 0; i<n; i++) {
        y += x;
    }
    return y + "!";
});
