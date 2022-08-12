import museumsData from "./data.js";
console.log(museumsData[1]["description"]);

function changeTheme() {
  const checkbox = document.getElementById("switcher");
  checkbox.addEventListener("change", () => {
    const header = document.querySelector(".header");
    header.classList.toggle("dark");

    const footer = document.querySelector(".footer");
    footer.classList.toggle("dark");

    const sidebar = document.querySelector(".sidebar");
    sidebar.classList.toggle("dark");
  });
}

changeTheme();

function renderButtons(arr) {
  const listMenu = document.querySelector(".menu-items");
  arr.forEach((obj) => {
    listMenu.insertAdjacentHTML(
      "beforeend",
      `<li class="nav-item">` +
        `  <span class="btn-text">${obj["btnName"]}</span>` +
        `</li>`
    );
  });
}

renderButtons(museumsData);

function toggleSelectedButton() {
  let selectedButton = document.getElementsByClassName("nav-item")[1];
  selectedButton.classList.add("open");

  const buttons = document.getElementsByClassName("nav-item");

  for (let button of buttons) {
    button.addEventListener("click", function () {
      if (!this.classList.contains("open")) {
        selectedButton.classList.remove("open");
        this.classList.add("open");
        selectedButton = this;
      }
    });
  }
}

toggleSelectedButton();
