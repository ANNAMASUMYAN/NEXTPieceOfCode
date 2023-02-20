import { Console } from "console";
import React from "react";
import data from '../../data/Data'
import Category from './Category';


const CategoryContent: React.FC = () => {
  let rightBlockParts = '3';
  let parts = [];
  for (let i = 0; i < rightBlockParts.length; i++) {
    parts.push(i);
  }
  return (
    <>
      {data.map((elem) => {
        return (
          <div key={elem.id} className="categoryContent">
            <Category 
              id = {elem.id}
              img={elem.img}
              name={elem.name}
              placeholder={elem.placeholdertext}
            />
          </div>
        );
      })}
      
    </>
  );
};

export default CategoryContent;
