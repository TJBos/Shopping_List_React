import React from "react";

//EditForm component that can edit name and add quantity, price, category
const EditForm = (props) => {
  const [editData, setEditData] = React.useState(props.item);

  //function handles form submit
  const handleSubmit = (event) => {
    event.preventDefault();
    props.setShoppingItems([
      ...props.shoppingItems.filter((x) => x !== props.item),
      editData,
    ]);
    props.history.push("/");
  };

  //binding function that controls state of inputs
  const handleChange = (event) => {
    setEditData({ ...editData, [event.target.name]: event.target.value });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        value={editData.name}
        onChange={handleChange}
      />
      <input
        type="number"
        name="qty"
        placeholder="enter quantity"
        value={editData.qty}
        onChange={handleChange}
      />
      <input
        type="number"
        name="price"
        placeholder="enter price"
        value={editData.price}
        onChange={handleChange}
      />
      <input
        type="text"
        name="category"
        placeholder="enter category"
        value={editData.category}
        onChange={handleChange}
      />
      <button type="submit" value="Edit">
        Edit
      </button>
    </form>
  );
};

export default EditForm;
