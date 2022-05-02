import React from 'react';
import { ThemeProvider as SCThemeProvider} from 'styled-components';
import { GlobalStyle } from './Global';
import { theme } from './theme';

interface ThemeProviderProps { children?: React.ReactNode }

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
    return (
        <React.Fragment>
            <GlobalStyle />
            <SCThemeProvider theme={theme}>
                {children}
            </SCThemeProvider>
        </React.Fragment>
    );
};