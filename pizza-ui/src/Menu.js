function Menu() {
  const pizzaList = [
    { id: 1, list: "paneer-pizza", image: require("./image/paneer-PIZZA.jpg") },
    { id: 2, list: "chicken-pizza", image: require("./image/checkin-pizza.jpg") },
    { id: 3, list: "pizza", image: require("./image/pizza.jpg") },
    { id: 4, list: "veg-pizza", image: require("./image/veg-pizza.jpg") },
    { id: 6, list: "veg-2-pizza", image: require("./image/veg-2-pizza.jpg") },
    { id: 7, list: "veg-3-pizza", image: require("./image/veg-3-pizza.jpg") },
  ];

  return (
    <div>
      <h6 className="pizzaheader">Pizza Menu</h6>
      <div className="pizzaCard">
        {pizzaList.map((pizza) => (
          <div className="pizzaList" key={pizza.id}>
            {pizza.image && (
              <img
                src={pizza.image}
                alt={pizza.list}
                style={{ width: "35%", borderRadius: "8px" }}
              />
            )}
            <h4>{pizza.list}</h4>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Menu;
