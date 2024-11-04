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

let removeActive = false;
const loadTransactions = () => {
  const transactionsList = document.getElementById("transactions-list");
  transactions.forEach((transaction, index) => {
    const element = document.createElement("div");
    element.classList.add("transaction");
    element.setAttribute("id", `transaction-${index}`);
    element.innerHTML = `
      <h3 class="grow2">${transaction["note"]}</h3>
      <h3 class="grow1">${transaction["amount"]}</h3>
      <h3 class="grow1 text-align-right">${transaction["date"]}</h3>
    `;

    const button = document.createElement("button");
    button.setAttribute(
      "class",
      `transaction-button ${removeActive ? "" : "hidden"}`,
    );
    button.innerHTML = `<i class="fa fa-trash text-color-black"></i>`;
    button.addEventListener("click", () => {
      transactions.splice(index, 1);
      transactionsList.innerHTML = "";
      loadTransactions();
    });

    element.appendChild(button);

    transactionsList.appendChild(element);
  });
};

const initActionButtons = () => {
  const removeElementButton = document.getElementById("remove-button");

  removeElementButton.addEventListener("click", () => {
    removeActive = !removeActive;
    removeElementButton.classList.toggle("clicked");
    transactionButtons = Array.from(
      document.getElementsByClassName("transaction-button"),
    );

    transactionButtons.forEach((button) => {
      button.classList.toggle("hidden");
    });
  });

  const expenseButton = document.getElementById("expense-button");
  const incomeButton = document.getElementById("income-button");

  const toggleActiveButton = (event) => {
    if (event.target.classList.contains("active")) return;

    expenseButton.classList.toggle("active");
    incomeButton.classList.toggle("active");
  };

  expenseButton.addEventListener("click", toggleActiveButton);
  incomeButton.addEventListener("click", toggleActiveButton);
};

const renderData = () => {
  initActionButtons();
  loadTransactions();
};

document.addEventListener("DOMContentLoaded", () => {
  renderData();
});
