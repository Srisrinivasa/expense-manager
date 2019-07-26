import React from "react";
import MaterialTable from "material-table";

export const ExpenseList = props => {
    const {
        expenses,
        categories
    } = props;
  return (
     <MaterialTable
          editable={{
            onRowUpdate: newData =>
              new Promise(resolve => {
                setTimeout(() => {
                  resolve(props.updateExpense(newData));
                }, 500);
              }),
            onRowDelete: oldData =>
              new Promise(resolve => {
                setTimeout(() => {
                  const index = expenses.indexOf(oldData);
                  resolve(props.deleteExpense(expenses[index].id));
                }, 500);
              })
          }}
          options={{
            toolbar: false,
            pageSize: 5,
            pageSizeOptions: [5],
            search: false,
            toolbarButtonAlignment: "left"
          }}
          columns={[
            {
              title: "Category",
              field: "category",
              lookup: {...categories}
            },
            { title: "Item Name", field: "item_name" },
            { title: "Amount", field: "amount", type: "numeric" },
            { title: "Expense Date", field: "expense_date", type: "date" }
          ]}
          data={expenses}
        />
  );
};
