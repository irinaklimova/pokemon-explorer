import {Response} from "@/app/types/response";
import {getData} from "@/app/api/common";
import {Entity, Pokemon} from "@/app/types/pokemon";

function getPokemonData<T>(relativeUrl: string): Promise<T> {
    return getData<T>(`pokemon/${relativeUrl}`);
}
export function getAllPokemon(limit: number, offset: number): Promise<Response<Pokemon>> {
    return getPokemonData<Response<Entity>>(`?offset=${offset}&&limit=${limit}`).then(res => {
        let pr = res.results.map(item => {
            const id = item.url.split('pokemon/')?.pop();
            if (id) return getPokemonById(id);
            throw new Error('Invalid Pokemon Id');
        });
        return Promise.all(pr).then(pokemon => {
            return {
                ...res,
                results: pokemon
            }
        })
    });
}
export function getPokemonById(pokemonId: string): Promise<Pokemon> {
    return getPokemonData<Pokemon>(pokemonId);
}