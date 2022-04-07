import { useQuery } from "@apollo/client"
import { GET_POKEMONS } from "../../graphql/queries/get_pokemons"

export const useQueryPokemons = (number = 1) => {
    const {loading, error, data} = useQuery(GET_POKEMONS, {variables: {$number: number}});

    return {loading, error, data};
};
