import { useEffect, useState } from "react";
import axios from "axios";
import { url } from "../lib/random";

const PokemonShow = ({ id, num }) => {
  const [pokemon, setPokemon] = useState({
    name: "Name",
    type: "Type",
    move: "Moves",
  });
  useEffect(() => {
    axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`).then((response) => {
      setPokemon({
        name: response.data.name,
        type: response.data.types[0].type.name,
        move: response.data.moves[0].move.name,
      });
    });
  }, []);
  return (
    <div>
      <h3>
        {num + 1}.{pokemon.name}
      </h3>
      <h4>{pokemon.type}</h4>
      <h5>{pokemon.move}</h5>
      <img src={`${url}/${id}.svg`} alt="pokemon" style={{ height: "250px" }} />
    </div>
  );
};

export default PokemonShow;