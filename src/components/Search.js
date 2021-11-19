import { useState } from "react";

const Search = ({ data, setFilteredData }) => {
  const [dataEntry, setDataEntry] = useState("");

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
          class="font-mono h-14 w-96 pr-8 pl-5 rounded px-4 sm:px-6 lg:px-8"
          value={dataEntry}
          placeholder="Search Countries..."
          onChange={handleFilter}
        />
        <div class="absolute top-4 right-3">
          {dataEntry.length === 0 ? <i class="fa fa-search text-gray-400"></i> : <i class="fas fa-times text-gray-400 cursor-pointer"
          onClick={clearInput}></i>}
        </div>
      </div>
    </div>
  );
};

export default Search;
