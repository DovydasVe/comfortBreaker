let challenges = ["Take a cold shower.",
"Make eye contact with every person you walk by today.",
"Compliment three people today. Doesn't matter if it's a stranger, a sibling or a friend."];

/*const coldShower = "Take a cold shower.";
const eyeContact = "Make eye contact with every person you walk by today.";
const compliment = "Compliment three people today. Doesn't matter if it's a stranger, a sibling or a friend.";*/

function dailyPick() {
    let randomNumber = Math.floor(Math.random() * challenges.length);
    document.getElementById("demo").innerHTML = `Task: ${challenges[randomNumber]}`;
}