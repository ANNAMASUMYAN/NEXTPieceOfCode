import React, { useState } from "react";
import { BiSearchAlt2 } from "react-icons/bi";
import { IData } from "../../interfaces";

const SearchText: React.FC <IData> = ({placeholder}) => {
  const [value, setValue] = useState('');
  
  return (
    <div className="input">
      <input
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className = "innerInput"
      />   
      <div className="search">
        <a href="Diseases list">
          <div className="searchIcon"><BiSearchAlt2/></div>
        </a>
      </div>
    </div>
  );
};

export default SearchText;
