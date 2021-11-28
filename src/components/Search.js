import { useState } from "react";

const Search = ({ data, setFilteredData }) => {
  const [dataEntry, setDataEntry] = useState("");

  console.log(data);

  const handleFilter = (event) => {
    const searchWord = event.target.value;
    setDataEntry(searchWord);
    const newFilter = data.filter((value) => {
      return value.country.includes(searchWord);
    });
    if (searchWord === "") {
      setFilteredData(data);
    } else {
      setFilteredData(newFilter);
    }
  };

  const clearInput = () => {
    setFilteredData(data);
    setDataEntry("");
  };

  return (
    <div className="flex flex-col items-center justify-center m-10">
      <div class="container border-4 border-brand rounded-lg mx-auto w-4/5 relative z-10 flex flex-col items-center py-10 px-10 md:py-12 md:px-12 my-10 md:my-14 bg-black">
        <h1 className="m-10 w-full md:w-auto font-mono text-sm md:text-base lg:text-lg text-light">
          Enter the name of a country to see their total cases from 2019 until
          now.
        </h1>
        <div class="relative">
          <input
            type="text"
            class="font-mono h-12 w-64 md:h-14 md:w-96 pr-8 pl-5 px-4 sm:px-6 lg:px-8 placeholder-black text-sm md:text-base lg:text-lg bg-light rounded-lg"
            value={dataEntry}
            placeholder="Search"
            onChange={handleFilter}
          />
          <div class="absolute top-3 right-4">
            {dataEntry.length === 0 ? (
              <i class="fa fa-search text-brand text-sm md:text-base lg:text-lg"></i>
            ) : (
              <i
                class="fas fa-times text-brand cursor-pointer text-sm md:text-base lg:text-lg"
                onClick={clearInput}
              ></i>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;
