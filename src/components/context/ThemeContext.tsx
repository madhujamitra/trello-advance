
import React, { useContext, useState, createContext, ReactNode } from 'react';

interface ThemeContextType {
    theme: string;
    toggleTheme: () => void;
  }

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);


const ThemeProvider:React.FC<{children: ReactNode }> = ({children}) =>{
const[theme, setTheme] = useState("light");


const toggleTheme = () =>{
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark': 'light'))
}
return (
    <ThemeContext.Provider value={{ theme,toggleTheme }}>
{children}
    </ThemeContext.Provider>
)


}

const useTheme = (): ThemeContextType => {
    const context = useContext(ThemeContext);
    if (!context) {
      throw new Error('useTheme must be used within a ThemeProvider');
    }
    return context;
  };
  

export {ThemeProvider, useTheme}