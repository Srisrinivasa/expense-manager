import React from "react";
import Chart from "react-apexcharts";

export const BudgetChart = props => {
  let totalExpense = 0;
  totalExpense =
    props.expenses.length > 0 &&
    props.expenses
      .map(item => item.amount)
      .reduce((a, b) => Number(a) + Number(b));
  const details = {
    options: {
      colors: ["#FF4560", "#FEB019"],
      plotOptions: {
        pie: {
          expandOnClick: false,
          donut: {
            labels: {
              show: true
            }
          }
        }
      },
      labels: ["Expenses", "Budget"]
    },
    series: [Number(totalExpense), Number(props.updatedBudget)]
  };

  return (
    <div className="donut">
      <Chart
        options={details.options}
        series={details.series}
        type="donut"
        width="300"
      />
    </div>
  );
};
