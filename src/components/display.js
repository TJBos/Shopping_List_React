import "../App.css";
import React from "react";

const Display = (props) => {
  const {
    shoppingItems,
    setShoppingItems,
    setCrossedItems,
    crossedItems,
    setSelectedItem,
  } = props;

  const selectItem = (item) => {
    setSelectedItem(item);
  };

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
    <div className="display">
      <div className="shopping-list">
        <h2>Pending</h2>
        <ul>
          {shoppingItems.sort(sortFtn).map((item) => (
            <li className="list-item" id={item.name} onClick={toggleClick}>
              {item.name} -- {item.qty} -- ${item.price}
              <button
                onClick={() => {
                  selectItem(item);
                  props.history.push("/edit");
                }}
              >
                Edit
              </button>
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
  );
};

export default Display;
