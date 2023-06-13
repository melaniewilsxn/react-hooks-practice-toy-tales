import React, { useState } from "react";

function ToyForm({ onAddNewToy }) {

  const [formData, setFormData] = useState({
    "name": "",
    "image": "",
  })

  function handleChange(e){
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  function handleSubmit(e){
      e.preventDefault()
      const toyData = {
        "name": formData.name,
        "image": formData.image,
        "likes": 0
      }
      fetch("http://localhost:3001/toys", {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(toyData)
      })
      .then(res => res.json())
      .then(newToy => onAddNewToy(newToy))
  }

  return (
    <div className="container">
      <form className="add-toy-form" onSubmit={handleSubmit}>
        <h3>Create a toy!</h3>
        <input
          type="text"
          name="name"
          placeholder="Enter a toy's name..."
          className="input-text"
          value={formData.name}
          onChange={handleChange}
        />
        <br />
        <input
          type="text"
          name="image"
          placeholder="Enter a toy's image URL..."
          className="input-text"
          value={formData.image}
          onChange={handleChange}
        />
        <br />
        <input
          type="submit"
          name="submit"
          value="Create New Toy"
          className="submit"
        />
      </form>
    </div>
  );
}

export default ToyForm;
