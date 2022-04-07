import { useColorScheme } from "react-native";
import { appTheme } from "../../theme/theme";

export const useAppTheme = () => {
    const deviceTheme = useColorScheme();

    const theme = appTheme[deviceTheme] || appTheme.light;

    return theme;
}