import { dark } from "./dark";
import { light } from "./light";
import { AppThemeFont } from "./theme.interface";

const font: AppThemeFont = {
    size: {
        small: 14,
        medium: 18,
        large: 20
    }
};

export const appTheme = {
    light: {...light, font},
    dark: {...dark, font}
};
