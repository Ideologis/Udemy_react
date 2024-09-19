import { ThemeContext } from "../../App";
import { useContext } from "react";

const Theme = () => {
    const { theme, setTheme } = useContext(ThemeContext);
   
  return (
    <button onClick={() => setTheme(!theme)} className="bg-orange-400 px-5 py-2 text-white text-base shadow rounded  border-orange-300 mx-3 cursor-pointer transition-transform transform active:scale-95"
    style= {theme ? { backgroundColor: '#12443b' } : {} }>

      Change Theme
    </button>
  );
};

export default Theme;
