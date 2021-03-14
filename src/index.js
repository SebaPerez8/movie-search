import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import SearchMovies from "./components/SearchMovies";

function App() {
  return (
    <div className="container">
      <h1 className="title">Buscador de peliculas</h1>
      <SearchMovies />
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
