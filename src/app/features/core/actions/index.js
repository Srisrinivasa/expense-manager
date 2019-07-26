import { action } from 'root/actions';
import { actionTypes } from '../actionTypes';

export const addExpense = id => action(actionTypes.ADD_EXPENSE, id);
export const updateExpense = newData => action(actionTypes.UPDATE_EXPENSE, newData);

export const deleteExpense = newData => action(actionTypes.DELETE_EXPENSE, newData);

export const updateInput = details => action(actionTypes.UPDATE_INPUT, details);

export const addCategory = categoryName => action(actionTypes.ADD_CATEGORY, categoryName);

export const deleteCategory = categoryName => action(actionTypes.DELETE_CATEGORY, categoryName);
