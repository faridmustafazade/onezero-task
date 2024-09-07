import React from "react";

const Card = ({menuItem,category,defaultImage,handleCardClick}) => {
  return (
    <div
      id="itemCard"
      onClick={() => handleCardClick(menuItem, category.name[0].value)}
    >
      <div id="imgDiv">
        <img id="image" src={defaultImage} alt="" />
        <span id="price">₼ {menuItem.priceSell}</span>
      </div>
      <p id="itemName">{menuItem.name[0].value}</p>
    </div>
  );
};

export default Card;
