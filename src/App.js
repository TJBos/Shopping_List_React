import "./App.css";
import React from "react";
import { Route, Link, Switch } from "react-router-dom";
import EditForm from "./components/editForm";
import Display from "./components/display";

function App() {
  const [shoppingItems, setShoppingItems] = React.useState([
    { name: "milk", qty: 1, price: 3, category: "beverages" },
  ]);
  const [crossedItems, setCrossedItems] = React.useState([
    { name: "apples", qty: 2, price: 1, category: "fruit" },
  ]);

  const [selectedItem, setSelectedItem] = React.useState({});

  return (
    <div className="app">
      <h1>Shopping List</h1>

      <Switch>
        <Route
          exact
          path="/"
          render={(rp) => (
            <Display
              {...rp}
              shoppingItems={shoppingItems}
              setShoppingItems={setShoppingItems}
              crossedItems={crossedItems}
              setCrossedItems={setCrossedItems}
              setSelectedItem={setSelectedItem}
            />
          )}
        />
        <Route
          exact
          path="/edit"
          render={(rp) => (
            <EditForm
              {...rp}
              shoppingItems={shoppingItems}
              setShoppingItems={setShoppingItems}
              item={selectedItem}
            />
          )}
        />
      </Switch>
    </div>
  );
}

export default App;
