import React, { Fragment } from "react";
import { Routes } from "routes";
import { NavBar } from "features/core/views/NavBar";

export const App = () => {
  return (
    <Fragment>
      <h1 className="text-center header mb-0">Expenseeve</h1>
      <div className="row mx-0">
        <div className="col-md-2 pl-0">
           <NavBar /> 
        </div>
        <div className="col-md-10">
           <Routes /> 
        </div>
      </div>
    </Fragment>
  );
};
