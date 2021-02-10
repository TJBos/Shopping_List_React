import "../App.css";
import React from "react";
import CreateForm from "./createForm";

const Display = (props) => {
  const {
    shoppingItems,
    setShoppingItems,
    setCrossedItems,
    crossedItems,
    setSelectedItem,
  } = props;

  //formData has the dynamic state from the input form
  const [formData, setFormData] = React.useState({ name: "" });
  /*
  const [searchState, setSearchState] = React.useState({
    search: "",
  });

  const updateSearch = (event) => {
    setSearchState({
      ...searchState,
      search: formData.name.substr(0, 20),
    });
  };
  */

  let filteredItems = shoppingItems.filter((item) => {
    return (
      item.name
        .toLowerCase()
        .indexOf(formData.name.substr(0, 20).toLowerCase()) !== -1
    );
  });

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

  const MakeSubTotal = () => {
    let subTotal = 0;
    for (let item of shoppingItems) {
      if (item.qty && item.price) subTotal += item.qty * item.price;
    }
    return (
      <div>
        <h4>Subtotal: ${subTotal}</h4>
      </div>
    );
  };

  return (
    <>
      <CreateForm
        shoppingItems={shoppingItems}
        setShoppingItems={setShoppingItems}
        formData={formData}
        setFormData={setFormData}
      />
      <div className="display">
        <div className="shopping-list">
          <h2>Pending</h2>

          {filteredItems.sort(sortFtn).map((item) => (
            <div className="list-item" id={item.name} onClick={toggleClick}>
              <div>{item.name}</div>
              <div>Qty: {item.qty}</div>
              <div>Price: ${item.price}</div>
              <button
                onClick={() => {
                  selectItem(item);
                  props.history.push("/edit");
                }}
              >
                Edit
              </button>
            </div>
          ))}
          {MakeSubTotal()}
        </div>
        <div className="shopping-list">
          <h2>Crossed off</h2>

          {crossedItems.map((item) => (
            <div className="list-item" id={item.name} onClick={toggleClick}>
              {item.name}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Display;
