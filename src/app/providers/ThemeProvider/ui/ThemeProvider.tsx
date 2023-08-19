import React, { useMemo, useState } from 'react';
import {
    LOCAL_STORAGE_THEME_KEY,
    Theme,
    ThemeContext,
} from 'app/providers/ThemeProvider/lib/ThemeContext';

export const defaultTheme = (
    localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme) || Theme.light;
interface Props {
  children?: React.ReactNode;
}
export const ThemeProvider: React.FC<Props> = ({ children }) => {
    const [theme, setTheme] = useState<Theme>(defaultTheme);

    const defaultProps = useMemo(
        () => ({
            theme,
            setTheme,
        }),
        [theme],
    );
    return (
        <ThemeContext.Provider value={defaultProps}>
            {children}
        </ThemeContext.Provider>
    );
};
