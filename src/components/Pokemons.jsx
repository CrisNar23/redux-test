import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPokemonsAction, nextPokemonsAction } from "../redux/pokeDucks";

export default function Pokemons() {
  const dispatch = useDispatch();
  const pokemons = useSelector((store) => store.pokemons.array);
  return (
    <div>
      <h1>Lista de Pokemones</h1>
      <button onClick={() => dispatch(getPokemonsAction())}>
        Get Pokemons
      </button>
      <button onClick={() => dispatch(nextPokemonsAction(20))}>Next</button>
      <ul>
        {pokemons.map((item) => (
          <li key={item.name}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
}
