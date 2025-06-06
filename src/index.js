import {
  getTitle,
  getSubTitle,
  getBurgerPic,
  getTextSection,
  openingHours,
} from "./homepage";
import { menuPageRender } from "./menu";
import { aboutPageRender } from "./about.js";

import "./menu.js";
import "./styles.css";

const container = document.getElementById("content");

function clearContainer() {
  container.innerHTML = "";
}

function appendToContainer(...elements) {
  elements.forEach((element) => {
    container.appendChild(element);
  });
}

appendToContainer();

/* Frontpage */
function renderHome() {
  clearContainer();

  appendToContainer(
    getBurgerPic(),
    getTitle(),
    getSubTitle(),
    getTextSection(),
    openingHours()
  );
}

window.addEventListener("load", () => {
  renderHome();
});

const homeButton = document.getElementById("homeButton");
homeButton.addEventListener("click", () => {
  console.log("Homepage has been loaded");
  renderHome();
});

/* Menu */

const menuButton = document.getElementById("menuButton");
menuButton.addEventListener("click", () => {
  clearContainer();
  appendToContainer(getBurgerPic(), menuPageRender());
});

/* About */

const aboutButton = document.getElementById("aboutButton");
aboutButton.addEventListener("click", () => {
  clearContainer();

  appendToContainer(getBurgerPic(), aboutPageRender());
});
