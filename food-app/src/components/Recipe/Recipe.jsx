import { useContext } from "react";
import { ThemeContext } from "../../App";

const Recipe = ({ id, image, title, AddFavourites }) => {
  const {theme, setTheme} = useContext(ThemeContext)
  return (
    <div
      key={id}
      className=" border-red-300 p-3 shadow-md bg-white rounded-md "
    >
      <div>
        <img src={image} alt="..." />
      </div>
      <p
        className=" text-[#fa6400] font-bold text-x  mx-2 my-3 "
        style={theme ? { color: "#12343b" } : {}}
      >
        {title}
      </p>
      <button
        className="bg-[#fa6400af] rounded cursor-pointer text-sm p-3 font-semibold justify-center m-0 leading-3 text-white "
        onClick={AddFavourites}
        type="button"
        style={theme ? { backgroundColor: "#12343b" } : {}}
      >
        Add to favorite
      </button>
    </div>
  );
};

export default Recipe;
