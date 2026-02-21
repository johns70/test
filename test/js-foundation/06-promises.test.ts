import { getPokemonById } from '../../src/js-foundation/06-promises';

describe("js-foundation/06-promises", () => {
    test("Should be return name of Pokemon", async() => {
        // const pokemonId = 1
        // const pokemonName = await getPokemonById(pokemonId)

        // expect(pokemonName).toBe("bulbasaur")
    })

    test("Should be wrapp error", async() => {

        const pokemonId = 100000
        // try{
        //     const pokemonName = await getPokemonById(pokemonId)
        //     expect(pokemonName).toBeFalsy()
        // } catch(error) {
        //     expect(error).toBe(`Id not Found ${pokemonId}`)
        // }
        

    })
})