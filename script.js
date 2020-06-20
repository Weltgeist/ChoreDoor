const doorImage1 = document.getElementById("door1");
const doorImage2 = document.getElementById("door2");
const doorImage3 = document.getElementById("door3");
const botDoorPath = "https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/robot.svg";
const beachDoorPath = "https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/beach.svg";
const spaceDoorPath = "https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/space.svg";
let numCloseDoors = 3;
let openDoor1;
let openDoor2;
let openDoor3;
randomChoreDoorGenerator = () => {
  let choreDoor = Math.floor((Math.random()*numCloseDoors));
};
doorImage1.onclick = () => doorImage1.src = botDoorPath;
doorImage2.onclick = () => doorImage2.src = beachDoorPath;
doorImage3.onclick = () => doorImage3.src = spaceDoorPath;