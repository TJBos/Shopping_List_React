import "../App.css";
import React from "react";
import styled from "styled-components";

//Styled components
const Form = styled.form`
  width: 50%;
  margin-left: 30px;
`;

//CreateForm component to create a new item
const CreateForm = (props) => {
  const { formData, setFormData, shoppingItems, setShoppingItems } = props;

  //function handles submit
  const handleSubmit = (event) => {
    event.preventDefault();
    setShoppingItems([...shoppingItems, formData]);
    setFormData({ name: "" });
  };

  //binding function that controls state of form input
  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  return (
    <Form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="enter item"
        name="name"
        onChange={handleChange}
        value={formData.name}
      />
      <button type="submit">Create</button>
    </Form>
  );
};

export default CreateForm;
