import React, { createContext, useContext, useState } from 'react';
 
// Skapa kontexten för temat
const ThemeContext = createContext();
 
// Tema Provider-komponenten som kommer att lagra och tillhandahålla temat
export const ThemeProvider = ({ children }) => {
  const [darkTheme, setDarkTheme] = useState(false);
  const toggleTheme = () => {
    // Enkelt exempel: Växla mellan ljus och mörkt tema
    setDarkTheme(!darkTheme);
    console.log('toggle theme')
  };
 
  return (
<ThemeContext.Provider value={{ darkTheme, toggleTheme }}>
      {children}
</ThemeContext.Provider>
  );
};
 
// Använd en anpassad krok för att använda temat
export const useTheme = () => useContext(ThemeContext);