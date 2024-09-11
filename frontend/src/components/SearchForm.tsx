import React from "react";

interface SearchFormProps {
  query: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onClick: () => void;
}

const SearchForm: React.FC<SearchFormProps> = ({
  query,
  onChange,
  onClick,
}) => {
  return (
    <div className="form flex justify-center items-center gap-3">
      <input
        className="peer w-[300px] md:w-[400px] bg-transparent outline-none px-6 py-2 text-base text-white rounded-xl border border-gray-50 focus:shadow-md"
        type="text"
        value={query}
        onChange={onChange}
        name="books-name"
        placeholder="Enter name"
      />
      <button
        className="font-sans p-2 flex justify-center w-[150px] gap-2 items-center shadow-xl text-lg text-gray-50 bg-[#000000] backdrop-blur-md lg:font-semibold isolation-auto border-gray-50 before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full before:-left-full before:hover:left-0 before:rounded-full before:bg-[#FFFFFF] hover:text-black before:-z-10 before:aspect-square before:hover:scale-200 before:hover:duration-500 relative z-10 overflow-hidden border-2 rounded-full group"
        type="submit"
        onClick={onClick}
      >
        Search
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 16 19"
          className="w-4 h-4 justify-end text-white ease-linear duration-300 rotate-90 group-hover:rotate-45 "
        >
          <path
            className="fill-white group-hover:fill-black"
            d="M7 18C7 18.5523 7.44772 19 8 19C8.55228 19 9 18.5523 9 18H7ZM8.70711 0.292893C8.31658 -0.0976311 7.68342 -0.0976311 7.29289 0.292893L0.928932 6.65685C0.538408 7.04738 0.538408 7.68054 0.928932 8.07107C1.31946 8.46159 1.95262 8.46159 2.34315 8.07107L8 2.41421L13.6569 8.07107C14.0474 8.46159 14.6805 8.46159 15.0711 8.07107C15.4616 7.68054 15.4616 7.04738 15.0711 6.65685L8.70711 0.292893ZM9 18L9 1H7L7 18H9Z"
          ></path>
        </svg>
      </button>
    </div>
  );
};

export default SearchForm;
