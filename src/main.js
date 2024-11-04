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

const initFilterPopUp = () => {
  const popUp = document.getElementById("popup-overlay");
  const popupContent = document.getElementById("popup-content");

  popUp.addEventListener("click", () => {
    if (event.target === filterPopup) {
      popUp.classList.toggle("hidden");
    }
  });

  const closePopUpButton = document.getElementById("close-popup-button");
  closePopUpButton.addEventListener("click", () =>
    popUp.classList.toggle("hidden"),
  );
};

const renderData = () => {
  initActionButtons(transactions, loadTransactions);
  initFilterPopUp();
  loadTransactions();
};

document.addEventListener("DOMContentLoaded", () => {
  renderData();
});
