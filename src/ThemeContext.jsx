import React, { createContext, useContext, useState } from 'react';
 
// Skapa kontexten för temat
const ThemeContext = createContext();
 
// Tema Provider-komponenten som kommer att lagra och tillhandahålla temat
export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('light'); // Låt oss börja med 'light' som standardtema
 
  const toggleTheme = () => {
    // Enkelt exempel: Växla mellan ljus och mörkt tema
    setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
  };
 
  return (
<ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
</ThemeContext.Provider>
  );
};
 
// Använd en anpassad krok för att använda temat
export const useTheme = () => useContext(ThemeContext);