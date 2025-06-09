function appendValue(value) {
  document.getElementById("display").value += value;
}

function clearDisplay() {
  document.getElementById("display").value = "";
  document.getElementById("history").textContent = "";
}

function deleteLast() {
  const display = document.getElementById("display");
  display.value = display.value.slice(0, -1);
}

function calculate() {
  const display = document.getElementById("display");
  const history = document.getElementById("history");
  try {
    const expression = display.value;
    const result = eval(expression);
    history.textContent = expression;
    display.value = result;
  } catch (error) {
    display.value = "Klaida";
    history.textContent = "";
  }
}