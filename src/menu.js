// console.log("HI from Menu");

export function menuPageRender() {
  const menu = {
    items: [
      {
        name: "Margherita Pizza",
        description:
          "Classic pizza with tomato sauce, mozzarella, and fresh basil.",
        price: 9.99,
      },
      {
        name: "Spaghetti Carbonara",
        description: "Pasta with creamy egg sauce, pancetta, and parmesan.",
        price: 12.5,
      },
      {
        name: "Caesar Salad",
        description:
          "Romaine lettuce, croutons, parmesan, and Caesar dressing.",
        price: 7.25,
      },
      {
        name: "Grilled Salmon",
        description:
          "Salmon fillet with lemon butter sauce and seasonal vegetables.",
        price: 15.75,
      },
      {
        name: "Chocolate Lava Cake",
        description:
          "Warm chocolate cake with a gooey center, served with vanilla ice cream.",
        price: 6.5,
      },
    ],
  };

  function createElements(
    tag,
    { id, textContent, className, price, description } = {}
  ) {
    const element = document.createElement(tag);
    if (id) element.id = id;
    if (textContent) element.innerText = textContent;
    if (className) element.className = className;
    
    return element;
  }

  const foodContainer = document.createElement("div");

  menu.items.forEach((element) => {
    const foodElement = createElements("p", {
      textContent: element.name,
      class: "foodItem",
    });
    foodContainer.appendChild(foodElement);
  });
  return foodContainer;
}
