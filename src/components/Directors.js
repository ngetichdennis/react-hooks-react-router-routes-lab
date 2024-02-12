import React from "react";
import { directors } from "../data";

function Directors() {
  return <div>{/*{code here}*/}
  <h1>Directors Page</h1>
      {directors.map(director => (
        <div key={director.id}>
          <h2>{director.name}</h2>
          <ul>
            {director.movies.map(movie => (
              <li key={movie.id}>{movie.title}</li>
            ))}
          </ul>
        </div>
      ))}
  </div>;
}

export default Directors;
