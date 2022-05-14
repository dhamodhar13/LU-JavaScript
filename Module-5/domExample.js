const heading = document.querySelector("h1");

heading.classList.add("heading");

const paragraph = document.querySelector("p");
const newPara = document.createElement("p");
newPara.textContent = "new paragraph";
paragraph.appendChild(newPara);
paragraph.textContent = "Changed text";
