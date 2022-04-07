import { NameUrl } from "./pokemon.interface";

export interface PokemonListResponse {
    count: number;
    next: string;//"https://pokeapi.co/api/v2/pokemon/?offset=20&limit=20",
    previous: string|null;
    results: NameUrl[];
}