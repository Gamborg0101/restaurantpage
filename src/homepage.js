import burgerPic from "./assets/burger.png";

function createElements(
  tag,
  { id, textContent, className, source, altText } = {}
) {
  const element = document.createElement(tag);
  if (id) element.id = id;
  if (textContent) element.innerText = textContent;
  if (className) element.className = className;
  if (source) element.src = source;
  if (altText) element.alt = altText;
  return element;
}

const title = createElements("h1", {
  id: "headerFront",
  textContent: "Welcome to Niels' Kitchen",
});

const subTitle = createElements("h3", {
  id: "subtitle",
  textContent: "Home of Juicy Burgers & Grilled Goodness",
});

const buildTextSection = createElements("p", {
  id: "textSection",
  textContent:
    "At Niels' Kitchen, we serve up mouth-watering meat dishes and classic fast food favorites. From flame-grilled burgers to crispy fries, ribs, wings, and loaded sandwiches — everything is made fresh and packed with flavor. Whether youre craving a quick lunch or a hearty dinner, we've got something sizzling for you. Dine in, take out, or order online — fast, tasty, and satisfying.",
});

const buildTextDiv = createElements("div", {
  id: "textSectionContainer",
});

const burgerPicInElement = createElements("img", {
  id: "burger",
  source: burgerPic,
  altText: "picture of delicious burger",
});

export { title, subTitle, buildTextSection, burgerPicInElement, buildTextDiv };
