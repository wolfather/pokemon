import axios from "axios"
import { ENDPOINT } from "../graphql/endpoint"

export const getPokemon = async (id: number) => {
    const fetch = await axios.get(ENDPOINT, {
        params: {id}
    }).then(response => {
        const urls = response.data.results.map(result => {
            return axios.get(result.url);
        });
        // console.log('oi', urls);

        const allAxios = axios.all(urls);
        
        return allAxios;
    });

    return fetch;
}