import { useContext } from "react";
import { ThemeContext } from "../../App";

const Favourites = ({ id, image, title, removeFromFavourites }) => {
     const { theme, setTheme } = useContext(ThemeContext);

  return (
    <div
      key={id}
      className=" border-red-300 p-3 shadow-md bg-white rounded-md "
    >
      <div>
        <img src={image} alt="..." />
      </div>
      <p
        className=" text-[#fa6400] font-bold text-sm  mx-2 my-3 "
        style={theme ? { color: "#12343b" } : {}}
      >
        {title}
      </p>
      <button
        className="bg-[#fa6400] rounded cursor-pointer text-xs p-3 font-semibold justify-center m-0 leading-3 text-white "
        onClick={removeFromFavourites}
        type="button"
        style={theme ? { backgroundColor: "#12343b" } : {}}
      >
        Remove from favorite
      </button>
    </div>
  );
};

export default Favourites;
