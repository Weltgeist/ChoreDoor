const doorImage1 = document.getElementById("door1");
const doorImage2 = document.getElementById("door2");
const doorImage3 = document.getElementById("door3");
const botDoorPath = "https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/robot.svg";
const beachDoorPath = "https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/beach.svg";
const spaceDoorPath = "https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/space.svg";
let numCloseDoors = 3;
let openDoor1 = "";
let openDoor2 = "";
let openDoor3 = "";
let closedDoorPath = "https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/closed_door.svg";
const startButton = document.getElementById("start");
let currentPlaying = true;
/**
 * generate random door placement for chorebots and other figure.
 */
randomChoreDoorGenerator = () => {
  let choreDoor = Math.floor((Math.random()*numCloseDoors));
  switch (choreDoor) {
    case 0:
      openDoor1 = botDoorPath;
      openDoor2 = beachDoorPath;
      openDoor3 = spaceDoorPath;
      break;
    case 1:
      openDoor1 = spaceDoorPath;
      openDoor2 = botDoorPath;
      openDoor3 = beachDoorPath;
      break;
    case 2:
      openDoor1 = beachDoorPath;
      openDoor2 = spaceDoorPath;
      openDoor3 = botDoorPath;
      break;
    default:
      break;
  }
};
/**
 * check if doors is bot(true) or not.
 * @returns {bool} result if door is bot or not
 */
isBot = (door) => {
  return (door.src === botDoorPath);
}
/**
 * check if door is open(true) or not(false).
 * @returns {bool} result if door open or not
 */
isClicked = (door) => {
  return !(door.src === closedDoorPath);
}
/**
 * conclude game by resolving on win or lose scenario.
 */
gameOver = (status) => {
  if(status === "win"){
    startButton.innerHTML = "You win! Play again?";
  } else {
    startButton.innerHTML = "Game over! Play again?";
  }
  currentPlaying = false;
}
/**
 * decrease numberCloseDoors counters and check if it should call a gameover event.
 */
playDoor = (door) => {
  numCloseDoors--;
  if (numCloseDoors === 0) gameOver("win");
  else if (isBot(door)) gameOver();

};
randomChoreDoorGenerator();
if (currentPlaying && !isClicked(doorImage1) ){
  doorImage1.onclick = () => {
    doorImage1.src = openDoor1;
    playDoor(doorImage1);
  };
}
if (currentPlaying && !isClicked(doorImage2)){
  doorImage2.onclick = () => {
    doorImage2.src = openDoor2;
    playDoor(doorImage2);
  };
}
if (currentPlaying && !isClicked(doorImage3)){
  doorImage3.onclick = () => {
    doorImage3.src = openDoor3;
    playDoor(doorImage3);
  };
}
