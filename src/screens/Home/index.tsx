import { View, Text, FlatList } from "react-native"
import { Card } from "../../components/Card"
import { Loading } from "../../components/Loading"
import { Pokemon } from "../../entities/pokemon.interface"
import { useFetchPokemons } from "../../hooks/useFetchPokemons"
import { Title } from "./styles"
import { LinearGradient } from 'expo-linear-gradient';
import { appTheme } from "../../theme/theme"

export const Home = () => {
    const {loading, error, pokemons} = useFetchPokemons();    

    if(loading) {
        return <Loading />;
    }
    if(error) {
        return <Text>ERROR DE API</Text>
    }

    return (
        <View>
            <LinearGradient colors={[appTheme.light.secondary, appTheme.light.outline]}>
                <Title>HOME</Title>
                <FlatList
                    keyExtractor={item => `${item.id}`}
                    data={pokemons}
                    numColumns={3}
                    columnWrapperStyle={{alignContent: 'center', justifyContent: 'space-between'}}
                    renderItem={({item}: Pokemon) => <Card props={item} />}
                    onEndReached={() => console.log('fim da lista')}
                />
            </LinearGradient>
        </View>
    )
}