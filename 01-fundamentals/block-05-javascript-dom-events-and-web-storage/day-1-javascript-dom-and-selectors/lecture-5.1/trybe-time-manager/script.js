const timeManagerHeader = document.getElementById("header-container");
timeManagerHeader.style.backgroundColor = "#14B069";

const noEmergencyTasks = document.querySelector(".no-emergency-tasks");
noEmergencyTasks.style.backgroundColor = "#F9DB5E";

const noEmergencyHeaders = document.querySelectorAll(".no-emergency-tasks h3");
for (let i = 0; i < noEmergencyHeaders.length; i += 1) {
  noEmergencyHeaders[i].style.backgroundColor = "#232525"
}

const emergencyTasks = document.querySelector(".emergency-tasks");
emergencyTasks.style.backgroundColor = "#FE9F84";

const emergencyHeaders = document.querySelectorAll(".emergency-tasks h3");
for (let i = 0; i < emergencyHeaders.length; i += 1) {
  emergencyHeaders[i].style.backgroundColor = "#A529F3"
}

const footer = document.getElementById("footer-container");
footer.style.backgroundColor = "#013533"