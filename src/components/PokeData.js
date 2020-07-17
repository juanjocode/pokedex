import { useState, useEffect } from 'react';

const PokeData = (API) => {
  const [ pokemon, setPokemon ] = useState([]);
  useEffect(() => {
    fetch(API)
      .then(response => response.json())
      .then(data => setPokemon(data));
  });
  return pokemon;
};

export default PokeData;
