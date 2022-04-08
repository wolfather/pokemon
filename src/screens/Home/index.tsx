import { View } from "react-native"

import { LinearGradient } from 'expo-linear-gradient';
import { appTheme } from "../../theme/theme"
import { List } from "../../components/List"

export const Home = () => {
    return (
        <View>
            <LinearGradient colors={[appTheme.light.secondary, appTheme.light.outline]}>
                <List />
            </LinearGradient>
        </View>
    )
}