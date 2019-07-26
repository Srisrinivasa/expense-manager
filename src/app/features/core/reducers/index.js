import { actionTypes } from "../actionTypes";

const initialState = {
  loading: false,
  expenses: [],
  categories: ["food", "travel"],
  totalBudget: 200000,
  updatedBudget: 200000,
  newCategory: ""
};

export const expense = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_EXPENSE:
      state = {
        ...state,
        expenses: [
          ...state.expenses,
          {
            category: 0,
            item_name: "item",
            amount: 0,
            expense_date: new Date(action.payload),
            id: action.payload
          }
        ]
      };
      break;

    case actionTypes.UPDATE_EXPENSE:
      const { id } = action.payload;
      const updatedData = [...state.expenses].map(
        item => (item.id === id ? action.payload : item)
      );
      state = {
        ...state,
        expenses: updatedData
      };
      break;

    case actionTypes.DELETE_EXPENSE:
      const itemId = action.payload;
      const newData = [...state.expenses].filter(item => item.id !== itemId);
      state = {
        ...state,
        expenses: newData
      };
      break;

    case actionTypes.UPDATE_INPUT:
      state = {
        ...state,
        [action.payload.id]: action.payload.value
      };
      break;

    case actionTypes.ADD_CATEGORY:
      state = {
        ...state,
        categories: [...new Set([...state.categories, action.payload.toLowerCase()])]
      };
      break;

    case actionTypes.DELETE_CATEGORY:
      const newCategoryList = [...state.categories].filter(
        category => category !== action.payload
      );
      state = {
        ...state,
        categories: newCategoryList
      };
      break;

    default:
      return state;
  }
  return state;
};
