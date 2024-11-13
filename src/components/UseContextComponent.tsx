
import {createContext, useContext} from 'react';

const ThemeContext = createContext('light')
function ThemedComponent() {
    const theme = useContext(ThemeContext);
    return(
        <p>The current theme is {theme}</p>
    )
}

export default function ThemeApp() {
    return(
        <ThemeContext.Provider value="dark" >
            <ThemedComponent />
        </ThemeContext.Provider>
    )
}


/*
The useContext hook allows you to use the React Context API
 without using render props or manually passing props down
  the tree.

 */