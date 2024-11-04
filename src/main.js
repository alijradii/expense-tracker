const transactions = [];

let removeActive = false;

const loadTransactions = () => {
  const transactionsList = document.getElementById("transactions-list");
  transactionsList.innerHTML = "";

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
      loadTransactions(true);
    });

    element.appendChild(button);

    transactionsList.appendChild(element);
  });
};

const renderData = () => {
  initActionButtons(transactions, loadTransactions);
  loadTransactions();
};

document.addEventListener("DOMContentLoaded", () => {
  renderData();
});
