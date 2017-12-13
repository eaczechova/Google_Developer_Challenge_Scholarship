/*
 * Programming Quiz: Quidditch Cup (6-5)
 */

// your code goes here

var team = ["Oliver Wood", "Angelina Johnson", "Katie Bell", "Alicia Spinnet", "George Weasley", "Fred Weasley", "Harry Potter"];

function hasEnoughPlayers(team) {
    var teamLength = team.length;
    if (teamLength >= 7) {
        return true;
    }else { return false;}
}

console.log(hasEnoughPlayers(team));
