import axios from "axios"
import { ENDPOINT } from "../graphql/endpoint"

export const getPokemon = async (endpoint = ENDPOINT) => {
    const fetch = await axios.get(endpoint)
        .then(response => {
            const { results } = response.data;
            const urls = results.map(result => axios.get(result.url));

            const allRequests = axios.all(urls);
            
            return allRequests;
        });

    return fetch;
};
