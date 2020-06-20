const doorImage1 = document.getElementById("door1");
const doorImage2 = document.getElementById("door2");
const doorImage3 = document.getElementById("door3");
const botDoorPath = "https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/robot.svg";
doorImage1.onclick = () => doorImage1.src = botDoorPath;
doorImage2.onclick = () => {};
doorImage3.onclick = () => {};