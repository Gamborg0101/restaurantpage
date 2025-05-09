export function aboutPageRender() {
  function createText() {
    const textContainer = document.createElement("div");

    const aboutHeader = document.createElement("h3");
    aboutHeader.className = "aboutHeader";
    aboutHeader.innerText = "About os";

    const aboutText = document.createElement("p");
    aboutText.className = "aboutText";
    aboutText.innerText =
      "Niels' Kitchen started with a love for great food and good company. What began as backyard cookouts turned into a local favorite for comfort eats. We focus on fresh ingredients, bold flavors, and a cozy vibe. It's simple: we cook what we love, and we hope you love it too.";

    textContainer.appendChild(aboutHeader);
    textContainer.appendChild(aboutText);
    return textContainer;
  }

  return createText();
}
