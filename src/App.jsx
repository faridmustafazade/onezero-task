import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Slider from "./components/Slider";
import defaultImage from "./assets/images/image.jpg";

import Modal from "./components/Modal";
import { fetchMenus } from "./redux/slice/menu";
import Cards from "./components/Cards";
import Select from "./components/Select";

const App = () => {
  const dispatch = useDispatch();
  const menus = useSelector((state) => state.menu);

  const [Id, setId] = useState(null);
  const [archiveFilter, setArchiveFilter] = useState("all");
  const [archiveMenuItemsFilter, setArchiveMenuItemsFilter] = useState({});
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedMenuItem, setSelectedMenuItem] = useState(null);
  const [selectedCategoryName, setSelectedCategoryName] = useState("");

  useEffect(() => {
    dispatch(fetchMenus());
  }, [dispatch]);

  const handleArchiveChange = (e) => {
    setArchiveFilter(e.target.value);
  };

  const handleArchiveMenuItemsChange = (categoryId, e) => {
    setArchiveMenuItemsFilter({
      ...archiveMenuItemsFilter,
      [categoryId]: e.target.value,
    });
  };

  const handleCardClick = (menuItem, categoryName) => {
    setSelectedMenuItem(menuItem);
    setModalVisible(true);
    setSelectedCategoryName(categoryName);
  };

  const filteredCategories = menus?.data?.data?.categories?.filter((item) => {
    if (Id !== null && item.id !== Id) {
      return false;
    }

    if (archiveFilter === "true") {
      return item.isArchived === true;
    } else if (archiveFilter === "false") {
      return item.isArchived === false;
    }

    return true;
  });

  const archiveOptions = [
    { value: "all", label: "All" },
    { value: "true", label: "Archived" },
    { value: "false", label: "Not Archived" }
  ];

  return (
    <>
      <div>
        <div id="header">
          <div id="filterMenu">
            <h2>Menu</h2>
            <div id="select-option">
              <Select
                id="select"
                options={archiveOptions}
                value={archiveFilter}
                onChange={handleArchiveChange}
              />
            </div>
          </div>
          <Slider setId={setId} />
        </div>
        <div id="body">
          <Cards
            filteredCategories={filteredCategories}
            archiveMenuItemsFilter={archiveMenuItemsFilter}
            defaultImage={defaultImage}
            handleArchiveMenuItemsChange={handleArchiveMenuItemsChange}
            handleCardClick={handleCardClick}
            archiveOptions={archiveOptions}
          />
        </div>
        {modalVisible && selectedMenuItem && (
          <Modal
            defaultImage={defaultImage}
            selectedMenuItem={selectedMenuItem}
            setModalVisible={setModalVisible}
            selectedCategoryName={selectedCategoryName}
          />
        )}
      </div>
    </>
  );
};

export default App;
