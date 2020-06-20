const doorImage1 = document.getElementById("door1");
const botDoorPath = "https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/robot.svg";
doorImage1.onclick = () => doorImage1.src = botDoorPath;