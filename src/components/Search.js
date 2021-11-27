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
    <div className="flex items-center justify-center mb-10">
      <div class="relative">
        <input
          type="text"
          class="font-mono h-12 w-80 md:h-14 md:w-96 pr-8 pl-5 rounded px-4 sm:px-6 lg:px-8 placeholder-blue-dark bg-white-light text-blue-dark text-sm md:text-base lg:text-lg"
          value={dataEntry}
          placeholder="Search Countries..."
          onChange={handleFilter}
        />
        <div class="absolute top-3 right-4">
          {dataEntry.length === 0 ? (
            <i class="fa fa-search text-blue-dark text-sm md:text-base lg:text-lg"></i>
          ) : (
            <i
              class="fas fa-times text-blue-dark cursor-pointer text-sm md:text-base lg:text-lg"
              onClick={clearInput}
            ></i>
          )}
        </div>
      </div>
    </div>
  );
};

export default Search;
