import React from "react";
import { actors } from "../data";

function Actors() {
  return <div>
    <h1>Actors Page</h1>
    {actors.map(actor => <div key={actor.name}>
      <h2>{actor.name}</h2>
      <ul>
        {actor.movies.map(movieName => <li key={movieName}>{movieName}</li>)}
      </ul>
    </div>)} 
  </div>;
}

export default Actors;
