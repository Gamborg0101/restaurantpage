import {
  title,
  subTitle,
  buildTextSection,
  burgerPicInElement,
  buildTextDiv,
} from "./homepage";
import "./styles.css";

const container = document.getElementById("content");

container.appendChild(burgerPicInElement);
container.appendChild(title);

/* New container */
container.appendChild(buildTextDiv);
buildTextDiv.appendChild(subTitle);
buildTextDiv.appendChild(buildTextSection);
