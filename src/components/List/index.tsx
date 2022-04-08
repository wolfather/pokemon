import { FC, memo, PureComponent, useEffect } from "react";
import { FlatListProps, Text } from 'react-native';
import { Pokemon } from "../../entities/pokemon.interface"
import { useFetchPokemons } from "../../hooks/useFetchPokemons";
import { Card } from "../Card";
import { ListFlat, ListContainer } from "./styles"
import { Loading } from "../../components/Loading"

type Props = {
    props?: FlatListProps<any>;
}

export const _List: FC<Props|PureComponent> = ({...props}: Props) => {
    const {loading, error, pokemons, fetchPokemons, setUpdateFetch} = useFetchPokemons();

    if(error) {
        return <Text>ERROR DE API</Text>
    }
    
    return (
        <ListFlat {...props}
            keyExtractor={item => `${item.id}`}
            data={pokemons}
            numColumns={3}
            renderItem={({item}: Pokemon) => CachedCard(item)}
            onEndReached={() => {
                setUpdateFetch(true);
                //fetchPokemons();
            }}
            ListFooterComponent={() => (
                loading ? <Loading /> : <></>
            )}
        />
    )
}

const CachedCard = (item: Pokemon) => <Card props={item} />

export const List = memo(_List);