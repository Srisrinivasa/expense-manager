import React, { Fragment } from "react";

export const BudgetSection = props => {
  const {
    addCategory,
    totalBudget,
    updateBudget,
    updatedBudget,
    updateInput,
    newCategory,
  } = props;

  return (
    <Fragment>
      <div className="row">
        <label htmlFor="totalBudget" className="offset-1 col-2">
          Total Budget :
        </label>
        <input
          type="number"
          className="col-2"
          id="totalBudget"
          value={totalBudget}
          onChange={updateInput}
        />
        <button
          className="offset-1 btn btn-sm btn-primary"
          disabled={totalBudget === updatedBudget}
          onClick={updateBudget}
        >
          Update
        </button>
      </div>
      <br />
      <div className="row">
        <label htmlFor="newCategory" className="offset-1 col-2">
          Categories :
        </label>
        <input className="col-2" id="newCategory" value={newCategory} onChange={updateInput} />
        <button
          className="offset-1 btn btn-sm btn-primary"
          disabled={newCategory === ""}
          onClick={addCategory}
        >
          Add
        </button>
      </div>
    </Fragment>
  );
};
