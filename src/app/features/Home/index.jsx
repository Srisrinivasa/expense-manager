import React, { useEffect } from "react";
import { connect } from "react-redux";
import { BudgetChart } from "features/Home/views/BudgetChart";
import { CategoryChart } from "features/Home/views/CategoryChart";
import { ExpenseList } from "features/Home/views/ExpenseList";
import {
  addExpense,
  updateExpense,
  deleteExpense
} from "features/core/actions";

class HomePage extends React.PureComponent {
  addExpense = () => {
    this.props.addExpense(Date.now());
  };
  render() {
    const { updatedBudget, expenses, categories } = this.props.expenseManager;
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col">
            <BudgetChart updatedBudget={updatedBudget} expenses={expenses} />
          </div>
          <div className="col">
            <CategoryChart  categories={categories} expenses={expenses} />
          </div>
        </div>
        <button
          className="btn btn-sm btn-primary mb-2"
          onClick={this.addExpense}
        >
          Add expense
        </button>
        <ExpenseList
          updateExpense={this.props.updateExpense}
          deleteExpense={this.props.deleteExpense}
          {...this.props.expenseManager}
        />
      </div>
    );
  }
}
export const Home = connect(
  state => ({
    expenseManager: state.expense
  }),
  {
    addExpense,
    updateExpense,
    deleteExpense
  }
)(HomePage);
