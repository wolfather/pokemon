import { FlatList } from 'react-native';
import styled from 'styled-components/native';
import { Pokemon } from '../../entities/pokemon.interface';


/*export const ListContainer = styled.View`
    padding: 0 3%;
`*/


export const ListFlat = styled(FlatList as new () => FlatList<Pokemon>).attrs({
    columnWrapperStyle:{alignContent: 'center', justifyContent: 'space-between'},
    ListFooterComponentStyle:{height: 110}
})``;
