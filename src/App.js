import React, { useState} from 'react';
import axios from 'axios';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {

  const [pokeName, setName] =  useState([]);


  const fetchpokemon = e => {
    axios.get("https://pokeapi.co/api/v2/pokemon?offset=0&limit=807")
    .then( res => {
      console.log(res);
      setName(res.data.results);
    })
    .catch( err => console.log(err) );
      }

  return (
    <div className="App">
    <button onClick = {fetchpokemon} type="button" className="btn btn-secondary">Fetch Pokemon</button>
    <ul>
        {pokeName.map((pokemon, i) =>
          <li key = {i}>{pokemon.name}</li>
        )}
    </ul>
    </div>
  );
}

export default App;
