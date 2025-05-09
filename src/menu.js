import caesar from "./assets/caesar.jpg";
import carbo from "./assets/carbo.jpg";
import lava from "./assets/lava.jpg";
import pizza from "./assets/pizza.jpg";
import salmon from "./assets/salmon.jpeg";

export function menuPageRender() {
  const menuItems = [
    {
      name: "Margherita Pizza",
      description:
        "Classic pizza with tomato sauce, mozzarella, and fresh basil.",
      price: 9.99,
      img: pizza,
    },
    {
      name: "Spaghetti Carbonara",
      description: "Pasta with creamy egg sauce, pancetta, and parmesan.",
      price: 12.5,
      img: carbo,
    },
    {
      name: "Caesar Salad",
      description: "Romaine lettuce, croutons, parmesan, and Caesar dressing.",
      price: 7.25,
      img: caesar,
    },
    {
      name: "Grilled Salmon",
      description:
        "Salmon fillet with lemon butter sauce and seasonal vegetables.",
      price: 15.75,
      img: salmon,
    },
    {
      name: "Chocolate Lava Cake",
      description:
        "Warm chocolate cake with a gooey center, served with vanilla ice cream.",
      price: 6.5,
      img: lava,
    },
  ];

  function createFoodElements() {
    const foodContainer = document.createElement("div");
    menuItems.forEach(({ name, description, price, img }) => {
        
      foodContainer.className = "foodContainer";
      const foodItemsDiv = document.createElement("div");
      foodItemsDiv.classList = "foodItems";

      const foodName = document.createElement("p");
      foodName.className = "foodName";
      foodName.innerText = name;

      const foodDescription = document.createElement("p");
      foodDescription.className = "foodDescription";
      foodDescription.innerText = description;

      const foodPrice = document.createElement("p");
      foodPrice.className = "foodPrice";
      foodPrice.innerText = `$${price}`;

      const imgContainer = document.createElement("img");
      imgContainer.className = "image";
      imgContainer.src = img;

      const imgContainerDiv = document.createElement("div");
      imgContainerDiv.className = "imageDiv";
      imgContainerDiv.appendChild(imgContainer);

      foodItemsDiv.appendChild(foodName);
      foodItemsDiv.appendChild(foodDescription);
      foodItemsDiv.appendChild(imgContainerDiv);
      foodItemsDiv.appendChild(foodPrice);

      foodContainer.appendChild(foodItemsDiv);
    });
    return foodContainer;
  }

  return createFoodElements();
}
