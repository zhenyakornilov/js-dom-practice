import museumsData from "./data.js";
import switchTheme from "./utils.js";

switchTheme();

function renderButtons(arr) {
  const listMenu = document.querySelector(".menu-items");
  arr.forEach(({ btnName }) => {
    listMenu.insertAdjacentHTML(
      "beforeend",
      `<li class="nav-item">` +
      `  <span class="btn-text">${btnName}</span>` +
      `</li>`
    );
  });
}

renderButtons(museumsData);

function toggleSelectedButton(museums) {
  let selectedButton = document.getElementsByClassName("nav-item")[1];
  selectedButton.classList.add("open");

  const buttons = document.getElementsByClassName("nav-item");

  function getContextObj() {
    const selectedBtnText = document.querySelector(".open span");
    let obj = museums.filter(
      ({ btnName }) => btnName === selectedBtnText.textContent
    )[0];

    return obj;
  }

  renderArticle(getContextObj());

  for (let button of buttons) {
    button.addEventListener("click", function () {
      if (!this.classList.contains("open")) {
        document.querySelector(".content-body").innerHTML = "";
        selectedButton.classList.remove("open");
        this.classList.add("open");
        selectedButton = this;

        renderArticle(getContextObj());
      }
    });
  }
}

toggleSelectedButton(museumsData);

function renderArticle(museumObj) {
  let article = document.querySelector(".content-body");
  article.insertAdjacentHTML(
    "afterbegin",
    `<h2 class="museum-title">${museumObj.name}</h2>` +
    `<img class="museum-image" src="${museumObj.imageSrc}" width="38%" alt="photo of museum">` +
    `<p class="museum-desc">${museumObj.description}</p>` +
    `<p class="museum-link">Visit <a href="${museumObj.museumUrl}" target="_blank">museum page</a> for more information...</p>`
  );
}
