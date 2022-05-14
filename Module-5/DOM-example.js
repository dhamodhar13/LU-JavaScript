const grandParent = document.querySelector("#grandParentId");

// changeBackground(grandParent);

function changeBackground(element) {
  element.style.backgroundColor = "grey";
}

const parent1 = document.querySelector(".parent");
// parents.forEach(changeBackground);
// changeBackground(parents);

const child = document.querySelectorAll(".child");
// child.forEach(changeBackground);

// const children = Array.from(parent1.children);
// console.log(children);
// children.forEach(changeBackground);

const child2 = document.querySelector("#child2");
// const gp = child1.closest(".grandParent");
// changeBackground(gp);
console.log(child2.previousElementSibling);
