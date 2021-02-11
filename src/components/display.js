import "../App.css";
import React from "react";
import CreateForm from "./createForm";
import styled from "styled-components";

//Styled Components

const Main = styled.div`
  display: flex;
  justify-content: space-around;
`;
const ShoppingList = styled.div`
  border: 1px solid black;
  width: 40%;
  text-align: center;
`;

const ListItem = styled.div`
  border: 1px solid black;
  border-radius: 10px;
  width: 75%;
  margin: auto;
  display: flex;
  justify-content: space-around;
`;

//The functional component

const Display = (props) => {
  const {
    shoppingItems,
    setShoppingItems,
    setCrossedItems,
    crossedItems,
    setSelectedItem,
  } = props;

  //formData has the dynamic state from the text input
  const [formData, setFormData] = React.useState({ name: "" });

  //filter based on substring matching on what's typed in the text input
  let filteredItems = shoppingItems.filter((item) => {
    return (
      item.name
        .toLowerCase()
        .indexOf(formData.name.substr(0, 20).toLowerCase()) !== -1
    );
  });
  //selector funtion
  const selectItem = (item) => {
    setSelectedItem(item);
  };

  //A toggle function to move items from pending list to crossed off list
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

  //A sort comparison function to sort alphabetically based on a key
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

  //function to calculate subtotal when prices and quantities are available
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
      <Main>
        <ShoppingList>
          <h2>Pending</h2>

          {filteredItems.sort(sortFtn).map((item) => (
            <ListItem id={item.name} onClick={toggleClick}>
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
            </ListItem>
          ))}
          {MakeSubTotal()}
        </ShoppingList>
        <ShoppingList>
          <h2>Crossed off</h2>

          {crossedItems.map((item) => (
            <ListItem id={item.name} onClick={toggleClick}>
              {item.name}
            </ListItem>
          ))}
        </ShoppingList>
      </Main>
    </>
  );
};

export default Display;
