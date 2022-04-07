import { gql } from "@apollo/client";

export const GET_POKEMONS = gql`
    query getPokemon($number: Int!) {
        pokemon(id: $number) {
            name
        }
    }
`