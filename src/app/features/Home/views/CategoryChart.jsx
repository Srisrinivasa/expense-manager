import React from "react";
import Chart from "react-apexcharts";

export const CategoryChart = props => {
  let totals = {};
  props.expenses.length > 0 &&
    props.expenses.map(item => {
      if (Object.keys(totals).indexOf(item.category.toString()) !== -1) {
        return (totals[item.category] += Number(item.amount));
      } else {
        return (totals = { ...totals, [item.category]: Number(item.amount) });
      }
    });
  const series =
    Object.values(totals).length > 0
      ? Object.values(totals)
      : props.categories.map(item => 0);
  const details = {
    options: {
      labels: [...props.categories]
    },
    series: [...series]
  };

  return (
    <div className="donut">
      <Chart
        options={details.options}
        series={details.series}
        type="pie"
        width="300"
        height="185"
      />
    </div>
  );
};
