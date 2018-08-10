// Write your code in this file!


function scuberGreetingForFeet(distance) {
  console.log("== scuberGreetingForFeet ==");
  if (distance <= 400) {
    return "This one is on me!";
  }
  if ((distance > 2000) && (distance < 2500)) {
    return "I will gladly take your thirty bucks.";
  }
  if (distance > 2500) {
    return "No can do.";
  }
}
scuberGreetingForFeet(2001);

function ternaryCheckCity(city) {
  console.log("== ternaryCheckCity ==");

  variablename = (city === "NYC") ? "Ok, sounds good.":"No go."

  // city === "NYC"
  //   ? travel = "Ok, sounds good."
  //   : travel = "No go."

  // destination === "NYC"
  //   ? return 'Ok, sounds good.'
  //   : return 'No go.';
}
ternaryCheckCity("NYC");
