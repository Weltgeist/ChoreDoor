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
doorImage1.onclick = () => doorImage1.src = openDoor1;
doorImage2.onclick = () => doorImage2.src = openDoor2;
doorImage3.onclick = () => doorImage3.src = openDoor3;