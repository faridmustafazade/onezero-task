import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchMenus } from "../redux/slice/menu";

const Slider = ({ setId }) => {
  const dispatch = useDispatch();
  const menus = useSelector((state) => state.menu);

  const [activeCategoryId, setActiveCategoryId] = useState(null);
  const handleCategoryClick = (categoryId) => {
    setActiveCategoryId(categoryId);
    setId(categoryId);
  };

  useEffect(() => {
    dispatch(fetchMenus());
  }, []);

  return (
    <>
      <div id="Slider">
        <span
          id={activeCategoryId === null ? "activeCategories" : "categories"}
          onClick={() => handleCategoryClick(null)}
        >
          All
        </span>
        {menus?.data?.data?.categories?.map((category) => (
          <span
            key={category.id}
            id={
              activeCategoryId === category.id
                ? "activeCategories"
                : "categories"
            }
            onClick={() => handleCategoryClick(category.id)}
          >
            {category.name[0].value}
          </span>
        ))}
      </div>
    </>
  );
};

export default Slider;
