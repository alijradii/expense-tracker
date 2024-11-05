let lastCreatedId = parseInt(localStorage.getItem("lastId") || "0");

const initRemoveButton = () => {
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
};

let isExpense = true;
const initToggleButtons = () => {
  const expenseButton = document.getElementById("expense-button");
  const incomeButton = document.getElementById("income-button");

  const toggleActiveButton = (event) => {
    if (event.target.classList.contains("active")) return;

    isExpense = !isExpense;
    expenseButton.classList.toggle("active");
    incomeButton.classList.toggle("active");
  };

  expenseButton.addEventListener("click", toggleActiveButton);
  incomeButton.addEventListener("click", toggleActiveButton);
};

const setInputError = (input) => {
  input.classList.toggle("input-error");
  setTimeout(() => {
    input.classList.toggle("input-error");
  }, 2000);
};

const initAddTransactionButton = (dataArray, renderTransactions) => {
  lastCreatedId += 1;
  localStorage.setItem("lastId", lastCreatedId);

  const button = document.getElementById("add-transaction-button");
  button.addEventListener("click", () => {
    const noteInput = document.getElementById("transaction-note");
    const dateInput = document.getElementById("transaction-date");
    const amountInput = document.getElementById("transaction-amount");

    const note = noteInput.value.trim();
    const date = new Date(dateInput.value);
    const amountValue = amountInput.value.trim();

    if (!note) {
      setInputError(noteInput);
      return;
    }
    if (!amountValue || isNaN(parseInt(amountValue))) {
      setInputError(amountInput);
      return;
    }
    if (!date) {
      setInputError(dateInput);
      return;
    }
    const formattedDate = date.toLocaleDateString("en-US");
    let amount = parseInt(amountValue);
    if (isExpense) amount *= -1;

    noteInput.value = "";
    dateInput.value = "";
    amountInput.value = "";
    dataArray.push({
      id: lastCreatedId,
      note: note,
      date: formattedDate,
      amount: parseInt(amount),
    });

    localStorage.setItem("transactions", JSON.stringify(transactions));
    renderTransactions(transactions);
  });
};

const initFilterButton = () => {
  const button = document.getElementById("filter-button");

  button.addEventListener("click", () => {
    const popupOverlay = document.getElementById("popup-overlay");

    popupOverlay.classList.toggle("hidden");
  });
};

const initActionButtons = (dataArray, renderTransactions) => {
  initRemoveButton();
  initFilterButton();
  initToggleButtons();
  initAddTransactionButton(dataArray, renderTransactions);
};
