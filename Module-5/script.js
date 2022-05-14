const itemInput = document.querySelector("input");

function addItem() {
  const listItem = document.createElement("li");
  const item = document.createElement("span");
  const deleteButton = document.createElement("button");
  deleteButton.addEventListener("click", () => deleteItem(listItem));
  deleteButton.textContent = "Delete";

  // Add text content inside span
  item.textContent = itemInput.value;
  listItem.appendChild(item);
  listItem.appendChild(deleteButton);

  list.appendChild(listItem);
}

function deleteItem(listItem) {
  listItem.remove();
}

const list = document.querySelector("ul");

const form = document.querySelector("div");

function toggleTheme() {
  const target = document.getElementById("toggleTheme");
  if (target.textContent == "Dark") {
    target.textContent = "Light";
  } else {
    target.textContent = "Dark";
  }
  if (form.classList.contains("dark")) {
    form.classList.replace("dark", "light");
  } else {
    form.classList.replace("light", "dark");
  }
}
