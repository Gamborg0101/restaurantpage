const container = document.getElementById("content");

function buildHeaderFront() {
  const title = document.createElement("h1");

  title.id = "headerFront";

  title.innerText = "Welcome to Niels' Kitchen";

  container.appendChild(title);
}

function buildSubtitle() {
  const createSubtitle = document.createElement("h3");

  createSubtitle.id = "subtitle";

  createSubtitle.innerText = "Home of Juicy Burgers & Grilled Goodness";

  container.appendChild(createSubtitle);
}

function buildTextSection() {
  const createTextSection = document.createElement("p");

  createTextSection.id = "textSection";

  createTextSection.innerText =
    "At Niels' Kitchen, we serve up mouth-watering meat dishes and classic fast food favorites. From flame-grilled burgers to crispy fries, ribs, wings, and loaded sandwiches — everything is made fresh and packed with flavor. Whether youre craving a quick lunch or a hearty dinner, we've got something sizzling for you. Dine in, take out, or order online — fast, tasty, and satisfying.";

  container.append(createTextSection);
}

export { buildHeaderFront, buildSubtitle, buildTextSection };
