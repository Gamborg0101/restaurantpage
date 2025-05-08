import {
  getTitle,
  getSubTitle,
  getTextDiv,
  getBurgerPic,
  getTextSection,
  openingHours,
} from "./homepage";

import "./menu.js";
import "./styles.css";

/* MANGLER AT ÆNDRE NAVNE PÅ FUNKTIONERNE */

const container = document.getElementById("content");

function clearContainer() {
  container.innerHTML = "";
}

/* Frontpage */
function renderHome() {
  container.innerHTML = "";

  const getBurger = getBurgerPic();
  const title = getTitle();
  const textDiv = getTextDiv();
  const subTitle = getSubTitle();
  const textSection = getTextSection();
  const hours = openingHours();

  textDiv.appendChild(subTitle);
  textDiv.appendChild(textSection);
  container.appendChild(getBurger);
  container.appendChild(title);
  container.appendChild(textDiv);
  container.appendChild(hours);
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
