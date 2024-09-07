import React from "react";
import Select from "./Select";
import Card from "./Card";

const Cards = ({
  filteredCategories,
  archiveMenuItemsFilter,
  defaultImage,
  handleCardClick,
  handleArchiveMenuItemsChange,
  archiveOptions,
}) => {
  return (
    <>
      {filteredCategories?.map((category) => (
        <div key={category.id} style={{ marginTop: 40, marginBottom: 40 }}>
          <div id="filterMenu">
            <p id="categoryName">{category.name[0].value}</p>
            <div id="select-option">
              <Select
                id="select"
                options={archiveOptions}
                value={archiveMenuItemsFilter[category.id] || "all"}
                onChange={(e) => handleArchiveMenuItemsChange(category.id, e)}
              />
            </div>
          </div>
          <div id="cardDiv">
            {category?.menuItems
              ?.filter((item) => {
                const filterValue =
                  archiveMenuItemsFilter[category.id] || "all";
                if (filterValue === "all") {
                  return true;
                } else {
                  return item.isArchived === (filterValue === "true");
                }
              })
              .map((menuItem) => (
                <Card
                  key={menuItem.id}
                  handleCardClick={handleCardClick}
                  menuItem={menuItem}
                  category={category}
                  defaultImage={defaultImage}
                />
              ))}
          </div>
        </div>
      ))}
    </>
  );
};

export default Cards;
