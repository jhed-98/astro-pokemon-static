import type { FavoritePokemon } from "@interfaces/favorite-pokemon";
import { createSignal, Show, type Component } from "solid-js";

interface Props {
  pokemon: FavoritePokemon;
}

export const FavPokemonItem: Component<Props> = ({ pokemon }) => {
  const [isVisible, setIsVisible] = createSignal(true);
  const imageSrc = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png`;

  const deleteFavPokemon = () => {
    const favorites = JSON.parse(
      localStorage.getItem("favorites") || "[]"
    ) as FavoritePokemon[];
    const newFavorites = favorites.filter((p) => p.id !== pokemon.id);
    localStorage.setItem("favorites", JSON.stringify(newFavorites));
    setIsVisible(false);
  };
  return (
    <Show when={isVisible()}>
      <div class="flex flex-col justify-center items-center">
        <a
          href={`/pokemons/${pokemon.name}`}
          class="rounded flex flex-col justify-center items-center p-2"
        >
          <img
          style={`view-transition-name: ${pokemon.name}-image`}
          class="w-18 h-18" src={imageSrc} alt={pokemon.name} />
          <span class="capitalize tex-base">
            #{pokemon.id} {pokemon.name}
          </span>
        </a>

        <button onClick={deleteFavPokemon} class="rounded bg-red-600 p-2">
          Delete
        </button>
      </div>
    </Show>
  );
};
