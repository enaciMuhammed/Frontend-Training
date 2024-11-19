import {createContext, useContext} from 'react';

const ThemeContext = createContext('light')

function ThemedComponent() {
    const theme = useContext(ThemeContext);
    return (
        <div>
            <h2>useContext </h2>
            <p>The <strong>useContext</strong> hook allows you to use the React Context API
                without using render props or manually passing props down
                the tree.</p>
            <h3>Example: Using a Theme Context</h3>
            <p>The current theme is {theme}</p>
        </div>
    )
}

export default function ThemeApp() {
    return (
        <ThemeContext.Provider value="dark">
            <ThemedComponent/>
        </ThemeContext.Provider>
    )
}


/*
The useContext hook allows you to use the React Context API
 without using render props or manually passing props down
  the tree.

 */