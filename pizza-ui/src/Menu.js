function Menu() {
 const pizzaList = [
  { id: 1, list: "paneer-pizza", image: require("./image/panner-PIZZA.jpg") },
  { id: 2, list: "chicken-pizza", image: require("./image/checkin-pizza.jpg") },
  { id: 3, list: "pizza", image: require("./image/pizza.jpg") },
  { id: 4, list: "veg-pizza", image: require("./image/veg-pizza.jpg") },
  { id: 6, list: "veg-2-pizza", image: require("./image/veg-2 pizza.jpg") },
  { id: 7, list: "veg-3-pizza", image: require("./image/veg-3 pizza.jpg") },
];

  return (
    <>
      <h2>Pizza Menu</h2>
      <ul>
        {pizzaList.map((pizza) => (
          <li key={pizza.id}>
            {pizza.image && (
              <img
                src={pizza.image}
                alt={pizza.list}
                width="100"
                style={{ marginRight: "10px" }}
              />
            )}
            {pizza.list}
          </li>
        ))}
      </ul>
    </>
  );
}
export default Menu;
