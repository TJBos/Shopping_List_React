import "./App.css";
import React from "react";
import CreateForm from "./components/createForm";

function App() {
  const [shoppingItems, setShoppingItems] = React.useState([
    { name: "milk", qty: 1, price: 3, category: "beverages" },
  ]);
  const [crossedItems, setCrossedItems] = React.useState([
    { name: "apples", qty: 2, price: 1, category: "fruit" },
  ]);

  const toggleClick = (event) => {
    let itemName = event.target.id;
    let item =
      shoppingItems.find((x) => x.name === itemName) ||
      crossedItems.find((x) => x.name === itemName);
    console.log(item);
    if (shoppingItems.includes(item)) {
      setCrossedItems([...crossedItems, item]);
      setShoppingItems(shoppingItems.filter((x) => x !== item));
    } else if (crossedItems.includes(item)) {
      setShoppingItems([...shoppingItems, item]);
      setCrossedItems(crossedItems.filter((x) => x !== item));
    }
  };

  const sortFtn = (a, b) => {
    let fa = a.name.toLowerCase(),
      fb = b.name.toLowerCase();
    if (fa < fb) {
      return -1;
    }
    if (fa > fb) {
      return 1;
    }
    return 0;
  };

  return (
    <div className="app">
      <h1>Shopping List</h1>
      <CreateForm
        shoppingItems={shoppingItems}
        setShoppingItems={setShoppingItems}
      />
      <div className="display">
        <div className="shopping-list">
          <h2>Pending</h2>
          <ul>
            {shoppingItems.sort(sortFtn).map((item) => (
              <li className="list-item" id={item.name} onClick={toggleClick}>
                {item.name} -- {item.qty} -- ${item.price}
              </li>
            ))}
          </ul>
        </div>
        <div className="shopping-list">
          <h2>Crossed off</h2>
          <ul>
            {crossedItems.map((item) => (
              <li className="list-item" id={item.name} onClick={toggleClick}>
                {item.name}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;
