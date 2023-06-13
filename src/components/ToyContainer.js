import React from "react";
import ToyCard from "./ToyCard";

function ToyContainer({ toyList, onDeleteToy, onUpdateToy }) {

  const displayToys = toyList.map((toy) => {
    return <ToyCard toy={toy} key={toy.id} onDeleteToy={onDeleteToy} onUpdateToy={onUpdateToy}/>
  })

  return (
    <div id="toy-collection">{displayToys}</div>
  );
}

export default ToyContainer;
