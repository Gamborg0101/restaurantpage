import {
  getTitle,
  getSubTitle,
  getBurgerPic,
  getTextSection,
  openingHours,
} from "./homepage";
import { menuPageRender } from "./menu";

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
  container.innerHTML = "";
  console.log(menuPageRender());
  appendToContainer(getBurgerPic(), menuPageRender());

  /* RENDER HOME DO NOT REMOVE */
  // appendToContainer(
  //   getBurgerPic(),
  //   getTitle(),
  //   getSubTitle(),
  //   getTextSection(),
  //   openingHours()
  // );
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
  const getBurger = getBurgerPic();

  container.appendChild(getBurger);
});

const aboutButton = document.getElementById("aboutButton");
aboutButton.addEventListener("click", () => {
  console.log("hi");
});

/* About */
