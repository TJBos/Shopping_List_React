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

  return (
    <div className="App">
      <h1>Shopping List</h1>
      <CreateForm
        shoppingItems={shoppingItems}
        setShoppingItems={setShoppingItems}
      />
      <div className="pending-items">
        <h2>Pending</h2>
        <ul>
          {shoppingItems.map((item) => (
            <li>
              {item.name} -- {item.qty} -- ${item.price}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
