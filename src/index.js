import {
  title,
  subTitle,
  buildTextSection,
  burgerPicInElement,
  buildTextDiv,
} from "./homepage";

import "./menu.js";
import "./styles.css";

/* Frontpage */
const container = document.getElementById("content");

container.appendChild(burgerPicInElement);
container.appendChild(title);

container.appendChild(buildTextDiv);
buildTextDiv.appendChild(subTitle);
buildTextDiv.appendChild(buildTextSection);

/* Menu */



/* About */
