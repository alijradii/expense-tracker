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

let isExpense = false;
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

const initAddTransactionButton = (dataArray, loadTransactions) => {
  const button = document.getElementById("add-transaction-button");
  button.addEventListener("click", () => {
    const noteInput = document.getElementById("transaction-note");
    const dateInput = document.getElementById("transaction-date");
    const amountInput = document.getElementById("transaction-amount");

    const note = noteInput.value.trim();
    const date = new Date(dateInput.value);
    const amount = dateInput.value.trim();

    if (!note) {
      setInputError(noteInput);
      return;
    }
    if (!amount || isNaN(parseInt(amount))) {
      setInputError(amountInput);
      return;
    }
    if (!date) {
      setInputError(dateInput);
      return;
    }
    const formattedDate = date.toLocaleDateString("en-US");

    if (isExpense) amount *= -1;

    dataArray.push({
      note: note,
      date: formattedDate,
      amount: parseInt(amount),
    });

    loadTransactions();
  });
};

const initFilterButton = () => {
  const button = document.getElementById("filter-button");

  button.addEventListener("click", () => {
    const popupOverlay = document.getElementById("popup-overlay");

    popupOverlay.classList.toggle("hidden");
  });
};

const initActionButtons = (dataArray, loadTransactions) => {
  initRemoveButton();
  initFilterButton();
  initToggleButtons();
  initAddTransactionButton(dataArray, loadTransactions);
};
