const cachedData = localStorage.getItem("transactions");

const transactions = cachedData ? JSON.parse(cachedData) : [];

let removeActive = false;

const updateTransactions = () => {};

const renderTransactions = (list) => {
  const transactionsList = document.getElementById("transactions-list");
  transactionsList.innerHTML = "";

  list.forEach((transaction, index) => {
    const element = document.createElement("div");
    element.classList.add("transaction");
    element.setAttribute("id", `transaction['id']`);
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
      transactions = transactions.filter(
        (transaction) => transaction.id !== id,
      );
      localStorage.setItem("transactions", JSON.stringify(transactions));
      renderTransactions();
    });

    element.appendChild(button);

    transactionsList.appendChild(element);
  });
};

const initFilterPopUp = () => {
  const popUp = document.getElementById("popup-overlay");
  const popupContent = document.getElementById("popup-content");

  popUp.addEventListener("click", () => {
    if (event.target === popUp) {
      popUp.classList.toggle("hidden");
    }
  });

  const closePopUpButton = document.getElementById("close-popup-button");
  closePopUpButton.addEventListener("click", () =>
    popUp.classList.toggle("hidden"),
  );
};

const renderData = () => {
  initActionButtons(transactions, renderTransactions);
  initFilterPopUp();
  renderTransactions(transactions);
  initFilterCard(transactions, renderTransactions);
};

document.addEventListener("DOMContentLoaded", () => {
  renderData();
});
