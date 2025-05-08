// console.log("HI from Menu");

export function menuPageRender() {
  const menuItems = [
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
      description: "Romaine lettuce, croutons, parmesan, and Caesar dressing.",
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
  ];

  /* TO DO: Gør således, at vi har 3 p-elementer, og indsæt name, description og price i hver deres, samt placer alle 3 inde i deres individuelle div */
  function createFoodElements() {
    const foodContainer = document.createElement("div");
    menuItems.forEach(({ name, description, price }) => {
      foodContainer.className = "foodContainer";
      const foodItems = document.createElement("p");
      foodItems.innerText = `${name}, ${description} - ${price}`;
      foodContainer.appendChild(foodItems);
    });
    return foodContainer;
  }

  return createFoodElements();
}
