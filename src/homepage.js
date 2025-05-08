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

export function getTitle() {
  return createElements("h1", {
    id: "headerFront",
    textContent: "Welcome to Niels' Kitchen",
  });
}

export function getSubTitle() {
  return createElements("h3", {
    id: "subtitle",
    textContent: "Home of Juicy Burgers & Grilled Goodness",
  });
}

export function getTextSection() {
  const textContainer = document.createElement("div");
  textContainer.id = "textcontainer";

  const textParagraph = createElements("p", {
    id: "textSection",
    textContent:
      "At Niels' Kitchen, we serve up mouth-watering meat dishes and classic fast food favorites. From flame-grilled burgers to crispy fries, ribs, wings, and loaded sandwiches — everything is made fresh and packed with flavor. Whether youre craving a quick lunch or a hearty dinner, we've got something sizzling for you. Dine in, take out, or order online — fast, tasty, and satisfying.",
  });
  textContainer.appendChild(textParagraph);
  return textContainer;
}

export function getBurgerPic() {
  return createElements("img", {
    id: "burger",
    source: burgerPic,
    altText: "picture of delicious burger",
  });
}

export function openingHours() {
  const hourContainer = document.createElement("div");
  hourContainer.id = "hourContainer";
  hourContainer.innerText = "Opening Hours: ";

  const array = [
    ["Monday: 10.00 to 20.00"],
    ["Tuesday: 10.00 to 20.00"],
    ["Wednesday: 10.00 to 20.00"],
    ["Thursday: 10.00 to 20.00"],
    ["Friday: 10.00 to 20.00"],
    ["Saturday: 10.00 to 20.00"],
    ["Closed"],
  ];
  array.forEach((element) => {
    const eachDay = createElements("p");
    eachDay.innerHTML = element;
    hourContainer.appendChild(eachDay);
  });
  return hourContainer;
}
