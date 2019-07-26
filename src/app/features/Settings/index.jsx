import React from "react";
import { connect } from "react-redux";
import {
  updateInput,
  addCategory,
  deleteCategory
} from "features/core/actions";
import { BudgetSection } from "features/Settings/views/BudgetSection";
import { CategoryList } from "features/Settings/Views/CategoryList";

class SettingsPage extends React.PureComponent {
  updateInput = e => {
    const { value, id } = e.target;
    this.props.updateInput({ value, id });
  };

  updateBudget = () => {
    const { totalBudget } = this.props.expenseManager;    
    this.props.updateInput({ id: "updatedBudget", value: totalBudget });
  };

  addCategory = () => {
    const { newCategory } = this.props.expenseManager;
    this.props.addCategory(newCategory);
    this.props.updateInput({ id: "newCategory", value: "" });
  };

  deleteCategory = category => () => {
    this.props.deleteCategory(category);
  };

  render() {
    const { categories } = this.props.expenseManager;
    return (
      <div className="container mt-4">
        <BudgetSection
          updateBudget={this.updateBudget}
          updateInput={this.updateInput}
          addCategory={this.addCategory}
          {...this.props.expenseManager}
        />
        <CategoryList
          deleteCategory={this.deleteCategory}
          categories={categories}
        />
      </div>
    );
  }
}

export const Settings = connect(
  state => ({
    expenseManager: state.expense
  }),
  {
    updateInput,
    addCategory,
    deleteCategory
  }
)(SettingsPage);
