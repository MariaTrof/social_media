import { useContext } from 'react';
import { ThemeContext } from 'app/providers/ThemeProvider/lib/ThemeContext';
import { LOCAL_STORAGE_THEME_KEY, Theme } from './ThemeContext';

interface UseThemeResult {
  switchTheme: () => void
  theme: Theme
}

export function useTheme(): UseThemeResult {
    const { theme, setTheme } = useContext(ThemeContext);
    const switchTheme = () => {
        const newTheme = theme === Theme.dark ? Theme.light : Theme.dark;
        setTheme(newTheme);
        localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme);
        console.log(newTheme);
    };
    return {
        theme,
        switchTheme,
    };
}
