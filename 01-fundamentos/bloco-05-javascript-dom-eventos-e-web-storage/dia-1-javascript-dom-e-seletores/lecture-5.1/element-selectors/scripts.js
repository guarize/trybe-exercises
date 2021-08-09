const paragraph = document.getElementById("paragraph");
paragraph.style.color = "red";

document.getElementById("page-title").innerText = "The Conjuring"
document.getElementById("subtitle").innerText = "Based on the true case files of the Warrens"
document.getElementById("second-paragraph").innerText = "Development of the film began in January 2012, and reports confirmed Wan as the director of a film entitled The Warren Files, later retitled The Conjuring, centering on the alleged real-life exploits of Ed and Lorraine Warren, a married couple who investigated paranormal events."

console.log(document.getElementsByClassName("pText"));

const firstParagraph = document.getElementsByClassName("pText")[0];
firstParagraph.style.color = "blue";

const subtitle = document.getElementsByTagName("h4")[0];
subtitle.style.color = "red";