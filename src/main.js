const transactions = [
  { note: "Salary", amount: 1000, date: "2024-11-01" },
  { note: "Groceries", amount: -200, date: "2024-11-02" },
  { note: "Gym", amount: -50, date: "2024-11-05" },
  { note: "Bonus", amount: 500, date: "2024-11-10" },
  { note: "Dining Out", amount: -100, date: "2024-11-12" },
  { note: "Electricity Bill", amount: -75, date: "2024-11-15" },
  { note: "Rent", amount: -500, date: "2024-11-20" },
  { note: "Miscellaneous", amount: -25, date: "2024-11-25" },
];

let budget = 0;
const labels = [];
const dataPoints = [];

transactions.forEach((transaction) => {
  budget += transaction.amount;
  labels.push(transaction.date);
  dataPoints.push(budget);
});

const ctx = document.getElementById("budgetChart").getContext("2d");
const budgetChart = new Chart(ctx, {
  type: "line",
  data: {
    labels: labels,
    datasets: [
      {
        label: "Budget",
        data: dataPoints,
        borderColor: "#00d47e",
        backgroundColor: "#02586422",
        fill: true,
        tension: 0.4,
        pointBackgroundColor: "#00d47e",
        pointRadius: 5,
      },
    ],
  },
  options: {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      x: {
        title: {
          display: false,
          color: "#333",
          font: {
            size: 14,
            weight: "bold",
          },
        },
        ticks: {
          color: "#666",
        },
      },
      y: {
        title: {
          display: false,
          color: "#333",
          font: {
            size: 14,
            weight: "bold",
          },
        },
        ticks: {
          color: "#666",
        },
      },
    },
  },
});
