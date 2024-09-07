import React from "react";
import { decrement, increment } from "../redux/slice/counter";
import { FaMinus } from "react-icons/fa";
import { FaPlus } from "react-icons/fa6";
import { useDispatch, useSelector } from "react-redux";

const Modal = ({
  defaultImage,
  selectedMenuItem,
  selectedCategoryName,
  setModalVisible,
}) => {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.counter.value);
  return (
    <div id="modalContainer" onClick={() => setModalVisible(false)}>
      <div id="modal" onClick={(e) => e.stopPropagation()}>
        <img
          src={defaultImage}
          alt={selectedMenuItem.name[0].value}
          id="modalImage"
        />
        <div id="modalDescriptionContainer">
          <div id="modalTextContainer">
            <h3 className="modalItemName">{selectedMenuItem.name[0].value}</h3>
            <p className="modalItemCategory">{selectedCategoryName}</p>
            <p className="modalItemPrice">₼ {selectedMenuItem.priceSell}</p>
          </div>
          <div id="modalCounter">
            <button
              id="modalCounterButton"
              onClick={() => dispatch(decrement())}
            >
              <FaMinus />
            </button>
            <span className="modalCountText">{count}</span>
            <button
              id="modalCounterButton"
              onClick={() => dispatch(increment())}
            >
              <FaPlus />
            </button>
          </div>
          <ul id="modalList">
            <li>Size: Large</li>
            <li>Nuts: Hazelnut, 2 x Almond, Macadamia</li>
            <li>Syrups: Vanilla, Honey</li>
            <li>Fruits: Banana, 2 x Raspberry</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Modal;
