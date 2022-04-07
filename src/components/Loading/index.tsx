import { View, ActivityIndicator } from "react-native"

export const Loading = () => {
    return (
        <View style={{flex: 1, justifyContent: 'center', alignContent: "center" }}>
            <ActivityIndicator size={50} color={'#222'} />
        </View>
    )
}