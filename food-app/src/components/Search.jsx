import { useEffect, useState } from "react";

const Search = ({ getData, apiSuccess, setApiSuccess }) => {
  const [inputValue, setInputValue] = useState("");

  function handleInputValue(e) {
    const { value } = e.target;
    setInputValue(value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    getData(inputValue);
  }
  
  useEffect(() => {
    if (apiSuccess) {
      setInputValue("");
      setApiSuccess(false);
    }
  }, [apiSuccess]);

  return (
    <div className=" flex gap-5 justify-center">
      <form onSubmit={handleSubmit}>
        <input
          placeholder="Search Recipie"
          type="text"
          value={inputValue}
          onChange={handleInputValue}
          className="py-2 px-3 shadow rounded  mx-3 placeholder-gray-500 text-sm"
        />
        <button
          type="submit"
          className="bg-orange-400 px-5 py-2 text-white text-base shadow rounded  border-orange-300 mx-3 cursor-pointer transition-transform transform active:scale-95"
        >
          Search
        </button>
      </form>
    </div>
  );
};

export default Search;
