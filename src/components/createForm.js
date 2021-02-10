import "../App.css";
import React from "react";

const CreateForm = (props) => {
  const { formData, setFormData, shoppingItems, setShoppingItems } = props;

  const handleSubmit = (event) => {
    event.preventDefault();
    setShoppingItems([...shoppingItems, formData]);
    setFormData({ name: "" });
  };

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="enter item"
        name="name"
        onChange={handleChange}
        value={formData.name}
      />
      <button type="submit">Create</button>
    </form>
  );
};

export default CreateForm;
