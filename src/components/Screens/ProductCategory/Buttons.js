import React from "react";
import Data from "./Data";

const Buttons = ({ filterItem, setItem, menuItems }) => {
  return (
    <>
      <div className="grid grid-cols-1 my-4">
        {menuItems.map((Val, id) => {
          return (
            <button
            className="font-xs text-neutral-500 hover-underline-animation hover:text-black"
              onClick={() => filterItem(Val)}
              key={id}
            >
              {Val}
            </button>
          );
        })}
        <button
        className="font-xs text-neutral-500 hover-underline-animation hover:text-black px"
          onClick={() => setItem(Data)}
        >
          All
        </button>
      </div>
    </>
  );
};

export default Buttons;