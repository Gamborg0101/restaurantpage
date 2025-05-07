import { title, subTitle, buildTextSection } from "./homepage";
import "./styles.css";

const container = document.getElementById("content");

container.appendChild(title);
container.appendChild(subTitle);
container.appendChild(buildTextSection);
