let expression = "";

function appendValue(value) {
  expression += value;
  updateResult();
}

function clearResult() {
  expression = "";
  updateResult();
}

function calculate() {
  try {
    const result = eval(expression);
    expression = String(result);
    updateResult();
  } catch (error) {
    expression = "Error";
    updateResult();
  }
}

function updateResult() {
  document.getElementById("result").value = expression;
}
