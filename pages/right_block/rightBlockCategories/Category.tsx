import React, { useState } from "react";
import SearchText from "../UI/SearchText";
import { IData } from "../../interfaces";
import Image from "next/image";

const Category: React.FC<IData> = ({ name, img, placeholder }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  return (
    <div
      className="categoryContainer"
      onMouseEnter={() => setModalIsOpen(true)}
      onMouseLeave={() => setModalIsOpen(false)}
    >
      <div className="container">
        <div className="imgIcon">
         <Image src={img} width = {60} height = {60} />
        </div>
        <div className="category">
          <h3>{name}</h3>
          {/* {modalIsOpen && (

            <SearchText
              placeholder={placeholder}
              name={""}
              id={0}
              img={null}
            />
          )} */}
          <SearchText
              placeholder={placeholder}
              name={""}
              id={0}
              img={null}
            />
          <div className="fullList">
            <a href="Diseases list">Full list</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Category;
