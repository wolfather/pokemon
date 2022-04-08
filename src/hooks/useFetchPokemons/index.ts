import { useEffect, useState } from "react"
import { getPokemon } from "../../api/getpokemon"
import { Pokemon } from "../../entities/pokemon.interface"
import { ENDPOINT } from "../../graphql/endpoint";

export const useFetchPokemons = () => {
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<boolean>(false);
    const [pokemons, setPokemons] = useState<Pokemon[]>([]);
    const [updateFetch, setUpdateFetch] = useState<boolean>(false);
    
    const [offset, setOffset] = useState(0);

    const fetchPokemons = async () => {
        const _endPoint = offset !== 0 ? `${ENDPOINT}?offset=${offset}&limit=20`: ENDPOINT;
        await getPokemon(_endPoint)
            .then((responses) => {
                const currentList = responses.map(res => res.data);

                setPokemons(previous => [...previous, ...currentList]);
                setLoading(true);
                setError(false);
            });
    };
    
    useEffect(() => {
        fetchPokemons()
            .catch(err => console.log(err))
            .finally(() => {
                setOffset(previous => previous+20);
                setLoading(false);
                setUpdateFetch(false);
            });
    }, [updateFetch]);

    return { loading, error, pokemons, fetchPokemons, setUpdateFetch };
};
