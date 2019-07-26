import { actionTypes } from "../actionTypes";
import { action } from "root/actions";

export const addExpense = (id) => {
    return action(actionTypes.ADD_EXPENSE, id);
};
export const updateExpense = newData => {
    return action(actionTypes.UPDATE_EXPENSE, newData);
};

export const deleteExpense = newData => {
    return action(actionTypes.DELETE_EXPENSE, newData);
};

export const updateInput = details => {
    return action(actionTypes.UPDATE_INPUT, details);
};

export const addCategory = categoryName => {
    return action(actionTypes.ADD_CATEGORY, categoryName);
};

export const deleteCategory = categoryName => {
    return action(actionTypes.DELETE_CATEGORY, categoryName);
};