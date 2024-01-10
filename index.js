
const date = new Date();
const hours = date.getHours();
const greet = document.getElementById("input")
let greeting;
if (hours >= 0 && hours < 12) {
  greeting = "Good Morning";
  document.body.className = "morning";
} else if (hours >= 12 && hours < 18) {
  greeting = "Good Afternoon";
  document.body.className = "afternoon";

} else {
  greeting = "Good Night";
  document.body.className = "night";

}

document.getElementById("wishing").innerHTML = greeting;