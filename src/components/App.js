import React, { useState, useEffect } from "react";

import Header from "./Header";
import ToyForm from "./ToyForm";
import ToyContainer from "./ToyContainer";

function App() {
  const [showForm, setShowForm] = useState(false);
  const [toyList, setToyList] = useState([])

  useEffect(() => {
    fetch("http://localhost:3001/toys")
    .then(res => res.json())
    .then(toyData => setToyList(toyData))
  }, [])

  function handleClick() {
    setShowForm((showForm) => !showForm);
  }

  function handleNewToy(newToy){
    setToyList([...toyList, newToy])
  }

  function handleDeleteToy(deletedToy){
    const updatedToyList = toyList.filter((toy) => toy.id !== deletedToy.id)
    setToyList(updatedToyList)
  }

  function handleUpdateToy(updatedToy){
    const updatedToyList = toyList.map((toy) => {
      if(toy.id === updatedToy.id){
        return updatedToy
      } else {
        return toy
      }
    })
    setToyList(updatedToyList)
  }

  return (
    <>
      <Header />
      {showForm ? <ToyForm onAddNewToy={handleNewToy}/> : null}
      <div className="buttonContainer">
        <button onClick={handleClick}>Add a Toy</button>
      </div>
      <ToyContainer toyList={toyList} onDeleteToy={handleDeleteToy} onUpdateToy={handleUpdateToy}/>
    </>
  );
}

export default App;
