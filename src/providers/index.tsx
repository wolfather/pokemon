import { ApolloProvider } from "@apollo/client"
import { NavigationContainer } from '@react-navigation/native';
import { ThemeProvider } from "styled-components"
import { apolloClient } from "../graphql/apollo.client"
import { useAppTheme } from "../hooks/useAppTheme"

export const Providers = ({children}) => {
    return (
        <ApolloProvider client={apolloClient}>
            <ThemeProvider theme={useAppTheme()}>
                <NavigationContainer>{children}</NavigationContainer>
            </ThemeProvider>
        </ApolloProvider>
    )
}
