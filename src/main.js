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

const renderData = () => {
  const container = document.getElementById("transactions-container");

  transactions.forEach((transaction, index) => {
    const element = document.createElement("div");
    element.classList.add("transaction");
    element.setAttribute("id", `transaction-${index}`);
    element.innerHTML = `
      <h3 class="grow2">${transaction["note"]}</h3>
      <h3 class="grow1">${transaction["amount"]}</h3>
      <h3 class="grow1 text-align-right">${transaction["date"]}</h3>
      <button class="transaction-button hidden">
          <i class="fa fa-trash text-color-black"></i>
      </button>
    `;

    container.appendChild(element);
  });
};

document.addEventListener("DOMContentLoaded", () => {
  renderData();
});
