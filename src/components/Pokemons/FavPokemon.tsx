import type { FavoritePokemon } from "@interfaces/favorite-pokemon";
import { createSignal, For } from "solid-js";
import { FavPokemonItem } from "./FavPokemonItem";

const getLocalStorage = (): FavoritePokemon[] => {
  const favPokemon = JSON.parse(localStorage.getItem("favorites") ?? "[]");
  return favPokemon;
};
export const FavPokemon = () => {
  const [pokemons, setPokemons] = createSignal(getLocalStorage());
  return (
    <div class="grid grid-cols-2 sm:grid-cols-4">
      <For each={pokemons()}>
        {(pokemon) => <FavPokemonItem pokemon={pokemon} />}
      </For>
    </div>
  );
};
