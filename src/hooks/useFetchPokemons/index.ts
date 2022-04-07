import { useEffect, useState } from "react"
import { getPokemon } from "../../api/getpokemon"
import { Pokemon } from "../../entities/pokemon.interface"

export const useFetchPokemons = () => {
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<boolean>(false);
    const [pokemons, setPokemons] = useState<Pokemon[]>([]);

    const fetchPokemons = async () => {
        await getPokemon(1)
        .then((responses) => {
            setPokemons(responses.map(res => res.data));
            setError(false);
        });
    };

    useEffect(() => {
        fetchPokemons()
            .catch(err => {
                setError(true);
            })
            .finally(() => {
                setLoading(false);
            });
    }, []);

    return { loading, error, pokemons };
};
