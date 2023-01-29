function power() {
  let power = 1;
  let input = document.getElementById("num1").value;
  let input2 = document.getElementById("num2").value;
  let output = document.getElementById("output");
  for (let i = 1; i <= input2; i++) {
    power = power * input;
  }
  let div = document.createElement("div");
  div.innerHTML = `${power}`;
  output.appendChild(div);
}
