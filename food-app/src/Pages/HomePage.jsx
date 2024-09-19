import { useEffect, useReducer, useState } from "react";
import Search from "../components/Search";
import Recipe from "../components/Recipe/Recipe";
import Favourites from "../components/Favourites/Favourites";

const HomePage = () => {
  // Loading State
  const [loadingState, setLoadingState] = useState(false);

  const [recipes, setRecipes] = useState([]);
  const [favourite, setFavourite] = useState([]);
  const [apiSuccess, setApiSuccess] = useState(false);

  const initialState = {
    filteredValue: "",
  };
  const [state, dispacth] = useReducer(reducer, initialState);

  function reducer(action, state) {
    switch (action.type) {
      case "filterFavourite":

        return {
          ...state,
          filteredValue: action.value,
        };

      default:
        return state;
    }
  }
  function getData(input) {
    setLoadingState(true);

    //calling the API
    async function getReciepes(input) {
      const apiResponse = await fetch(
        `https://api.spoonacular.com/recipes/complexSearch?apiKey=a75e8372d22c4b35aca2a21f36d6b057&query=${input}`
      );

      const result = await apiResponse.json();
      const { results } = result;

      if (results && results.length > 0) {
        setLoadingState(false);
        setRecipes(results);
        setApiSuccess(true);
      }
    }
    getReciepes(input);
  }

  function AddToFavourites(getReciepe) {
    let cpyFavourites = [...favourite];

    const index = cpyFavourites.findIndex((item) => item.id === getReciepe.id);

    if (index === -1) {
      cpyFavourites.push(getReciepe);
      setFavourite(cpyFavourites);
      console.log(getReciepe.id);

      //Save inlocalStorages
      localStorage.setItem("favourites", JSON.stringify(cpyFavourites));
    } else {
      alert("Item is already present in favourties");
    }
  }
  useEffect(() => {
    const extractFavourites = JSON.parse(localStorage.getItem("favourites"));
    setFavourite(extractFavourites);
  }, []);

  function removeFavourites(getId) {
    let cpyFavourites = [...favourite];
    cpyFavourites = cpyFavourites.filter((item) => item.id !== getId);
    setFavourite(cpyFavourites);
    localStorage.setItem("favourites", JSON.stringify(cpyFavourites));
  }

  const filterFavourite = favourite.filter((items) =>
    items.title.toLowerCase().includes(state.filteredValue)
  );
  console.log(state);
  return (
    <div className="">
      <Search
        getData={getData}
        apiSuccess={apiSuccess}
        setApiSuccess={setApiSuccess}
      />

      <div className="flex-col flex justify-center ">
        <h1 className="text-[#fa6400] font-bold text-xl mx-3 my-3 ">
          Favourites
        </h1>
        <div>
          <input
            onChange={(event) =>
              dispacth({ type: "filterFavourite", value: event.target.value })
            }
            value={state.filteredValue}
            type="text"
            className="py-3 px-8 mb-7"
            placeholder="Search Favourites"
          />
        </div>

        <div className="flex gap-6 mb-7 overflow-auto">
          {filterFavourite && filterFavourite.length > 0
            ? favourite.map((items) => (
                <Favourites
                  id={items.id}
                  image={items.image}
                  title={items.title}
                  item={items}
                  removeFromFavourites={() => removeFavourites(items.id)}
                />
              ))
            : null}
        </div>
      </div>

      {loadingState && (
        <div className="text-2xl uppercase text-white">
          Loading recipes! please wait!
        </div>
      )}
      <div className="grid grid-cols-4 gap-4 p-4 m-4">
        {recipes && recipes.length > 0
          ? recipes.map((items, index) => (
              <Recipe
                AddFavourites={() => AddToFavourites(items)}
                id={items.id}
                image={items.image}
                title={items.title}
                item={items}
              />
            ))
          : null}
      </div>
    </div>
  );
};

export default HomePage;
