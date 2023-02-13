let number = [];
function fibonacciseries() {
  let input = parseInt(document.getElementById("input").value);
  number.push(input);
  document.getElementById("input").value = "";
}
function getseries() {
  let output = document.getElementById("output");
  let first = number[0];
  let second = number[1];
  let sum;
  for (let i = 0; i < number.length; i++) {
    sum = first + second;
    let div = document.createElement("div");
    div.innerHTML = `${first} ${second} ${sum}`;
    output.appendChild(div);
  }
}
