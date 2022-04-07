import 'styled-components';
import { appTheme } from './theme';

declare module 'styled-components' {
    type ThemeType = typeof appTheme;

    export interface DefaultTheme extends ThemeType { }
}