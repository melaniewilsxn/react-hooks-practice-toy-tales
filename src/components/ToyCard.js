import React from "react";

function ToyCard({ toy, onDeleteToy, onUpdateToy }) {

  function handleDelete(){
    fetch(`http://localhost:3001/toys/${toy.id}`, {method: "DELETE"})
    .then(res => res.json())
    .then(() => onDeleteToy(toy))
  }

  function handleLike(){
    fetch(`http://localhost:3001/toys/${toy.id}`, {
      method: "PATCH",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify({
        likes: (toy.likes+1)
      })
    })
    .then(res => res.json())
    .then((updatedToy) => onUpdateToy(updatedToy))
  }

  return (
    <div className="card">
      <h2>{toy.name}</h2>
      <img
        src={toy.image}
        alt={toy.name}
        className="toy-avatar"
      />
      <p>{toy.likes} Likes </p>
      <button className="like-btn" onClick={handleLike}>Like {"🤍"}</button>
      <button className="del-btn" onClick={handleDelete}>Donate to GoodWill</button>
    </div>
  );
}

export default ToyCard;
