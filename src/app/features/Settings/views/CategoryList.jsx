import React, { Fragment } from "react";
import "features/Settings/styles/CategoryList";

export const CategoryList = props => {
  return (
    <ul className="col-6 mt-4 offset-1 item-list">
      {props.categories &&
        props.categories.map((category, _, list) => {
          return (
            <div className="row" key={category}>
              <li className="col">{category}</li>
              {list.length > 1 && (
                <b
                  className="col text-danger remove-btn"
                  onClick={props.deleteCategory(category)}
                >
                  X
                </b>
              )}
            </div>
          );
        })}
    </ul>
  );
};
