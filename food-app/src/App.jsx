import { createContext, useState } from "react";
import "./App.css";
import Theme from "./components/Theme-button/theme";
import HomePage from "./Pages/HomePage";

export const ThemeContext = createContext(null); //Create Context
function App() {

  const [theme, setTheme] = useState(false); 

  return (
    <ThemeContext.Provider value={{theme, setTheme}}>  
      <div className="bg-blue-300 p-6"
      style = {theme ? {backgroundColor: "#FFDB58"}: {}}>
        <Theme />
        <h3 className="text-center min-h-8 p-4 ">
          <HomePage />
        </h3>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
