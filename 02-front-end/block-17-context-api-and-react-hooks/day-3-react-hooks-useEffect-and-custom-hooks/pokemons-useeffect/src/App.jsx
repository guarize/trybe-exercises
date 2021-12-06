import React, { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [pokemons, setPokemons] = useState([]);
  const url = 'https://pokeapi.co/api/v2/pokemon?limit=151';

  useEffect(() => {
    async function fetchData() {
      const { results } = await fetch(url).then((response) => response.json());
      setPokemons(results);
    }

    fetchData();
  });

  return (
    <div className="App">
      <h1>Pokemons List</h1>
      <ul>
        {pokemons.map((pokemon) => (
          <li>{pokemon.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
