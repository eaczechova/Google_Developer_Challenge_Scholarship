/*
 * Programming Quiz: Murder Mystery (3-4)
 */

// change the value of `room` and `suspect` to test your code
var room = "gallery";
var suspect = "Ms. Van Cleve";
var weapon = "";
var solved = false;

if (room === "gallery") {
    weapon = "trophy";
    if (suspect ==="Ms. Van Cleve") {
        solved = true; }

} else if (room === "billiards room") {
    weapon = "pool stick";
    if (suspect === "Mrs. Sparr"){
        solved = true; }

} else if (room === "ballroom"){
    weapon = "poison";
    if (suspect === "Mr. Kalehoff") {
        solved = true;}

} else if (room === "dining room") {
    weapon = "knife";
    if (suspect === "Mr. Parkes"){
    solved = true;}
}

if (solved) {
	console.log(suspect + " did it in the " +  room + " with the " + weapon + "!");
}
