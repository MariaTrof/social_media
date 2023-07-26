import React, { useMemo, useState, FC } from 'react'
import { LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext } from './ThemeContext'

const defaultTheme = localStorage.getItem(LOCAL_STORAGE_THEME_KEY)  as Theme|| Theme.light;
type Props = {
  children?: React.ReactNode;
};
export const ThemeProvider: React.FC<Props> = ({children}) => {
     const [theme, setTheme] = useState<Theme>(defaultTheme);


  const defaultProps = useMemo(() => ({
    theme: theme,
    setTheme: setTheme,
  }), [theme]);
  return (
    <ThemeContext.Provider value= {defaultProps }>
        {children}
    </ThemeContext.Provider>
  )
}
