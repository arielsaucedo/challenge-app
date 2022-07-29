import get from "axios";

const baseUrl = "https://pokeapi.co/api/v2/";

export const getPokemons = (pokemon: any) => {
  return get(`${baseUrl}/pokemon/${pokemon.toLowerCase()}`);
};
