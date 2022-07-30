import { getPokemons } from "../src/services/getPokemons";

describe("Pruebas en <PokemonSearchPage />", () => {
  test("getPokemons debe de retornar informacion al realizar una consulta", (done) => {
    const pokemon = "pikachu";
    getPokemons(pokemon).then((resp) => {
      expect(resp).not.toBeNull();
      done();
    });
  });

  test("getPokemons debe de retornar error al solicitar un pokemon inexistente", (done) => {
    const pokemon = "pepe";
    getPokemons(pokemon).catch((err) => {
      expect(err.response.status).toBe(404);
      done();
    });
  });

  test("getPokemons debe de retornar exactamente el pokemon solicitado", (done) => {
    const pokemon = "pikachu";
    getPokemons(pokemon).then((resp) => {
      expect(resp.data.name).toEqual("pikachu");
      done();
    });
  });
});
