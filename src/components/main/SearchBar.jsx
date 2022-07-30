import React, { useState } from "react";
import TextFields from "./TextFields";

/**
 * Displays a Search bar
 * @property {array} array - List of all employees displayed in the table
 * @property {function} setData - Filters the elements present in the array
 * @const {string} searchText - Text entered in the search field
 * @const {array} excludeColumns - Colones excluded in the table
 * @function filterData - Returns employees whose information matches the text entered in the search field
 * @return {JSX.Element} - Search bar
 */

const SearchBar = ({ array, setData }) => {
   const [searchText, setSearchText] = useState("");

   const excludeColumns = ["id"];

   const onChange = (value) => {
      setSearchText(value);
      filterData(value);
   };

   const filterData = (value) => {
      const lowerCaseValue = value.toLowerCase().trim();

      if (!lowerCaseValue) {
         setData(array);
      } else {
         const filteredData = array.filter((item) => {
            return Object.keys(item).some((key) => {
               return excludeColumns.includes(key)
                  ? false
                  : item[key].toString().toLowerCase().includes(lowerCaseValue);
            });
         });

         setData(filteredData);
      }
   };

   return (
      <div className="search-bar">
         <TextFields
            type="search"
            name="Search"
            value={searchText}
            event={(e) => onChange(e.target.value)}
         />
      </div>
   );
};

export default SearchBar;
